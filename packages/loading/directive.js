import Vue from 'vue';
import LoadingUI from './directive.vue';
const Mask = Vue.extend(LoadingUI);

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

const getStyle = function(element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};


/* istanbul ignore next */
const hasClass = function(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/* istanbul ignore next */
const addClass = function(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};


export default {
  install(Vue){
    const toggleLoading = (el, binding) => {
      if (binding.value) {
        Vue.nextTick(() => {
            if (binding.modifiers.body) {
              el.originalPosition = getStyle(document.body, 'position');
  
              ['top', 'left'].forEach(property => {
                const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
                el.maskStyle[property] = el.getBoundingClientRect()[property] +
                  document.body[scroll] +
                  document.documentElement[scroll] -
                  parseInt(getStyle(document.body, `margin-${ property }`), 10) +
                  'px';
              });
              ['height', 'width'].forEach(property => {
                el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
              });
  
              insertDom(document.body, el, binding);
            } else {
              el.originalPosition = getStyle(el, 'position');
              insertDom(el, el, binding);
            }
        });
      } else {
        el.domVisible = false;
        el.instance.visible = false;
        el.instance.hiding = true;
        el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
      }
    };
    const insertDom = (parent, el, binding) => {
      if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
        Object.keys(el.maskStyle).forEach(property => {
          el.mask.style[property] = el.maskStyle[property];
        });
  
        if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
          addClass(parent, 'lemon-v-loading-parent--relative');
        }
        el.domVisible = true;
  
        parent.appendChild(el.mask);
        Vue.nextTick(() => {
          el.instance.visible = true;
        });
        el.domInserted = true;
      }
    };
  
    Vue.directive('loading', {
      bind: function(el, binding, vnode) {
        const textExr = el.getAttribute('lemon-loading-text');
        const customClassExr = el.getAttribute('lemon-loading-custom-class');
        const backgroundExr = el.getAttribute('lemon-loading-background');
        const vm = vnode.context;
        const mask = new Mask({
          el: document.createElement('div'),
          data: {
            text: vm && vm[textExr] || textExr,
            customClass: vm && vm[customClassExr] || customClassExr,
            background: vm && vm[backgroundExr] || backgroundExr
          }
        });
        el.instance = mask;
        el.mask = mask.$el;
        el.maskStyle = {};
  
        binding.value && toggleLoading(el, binding);
      },
  
      update: function(el, binding) {
        el.instance.setText(el.getAttribute('lemon-loading-text'));
        if (binding.oldValue !== binding.value) {
          toggleLoading(el, binding);
        }
      },
  
      unbind: function(el, binding) {
        if (el.domInserted) {
          el.mask &&
          el.mask.parentNode &&
          el.mask.parentNode.removeChild(el.mask);
          toggleLoading(el, { value: false, modifiers: binding.modifiers });
        }
      }
    });
  }
};
