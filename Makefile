.PHONY: dist
default: help

install:
	npm run install-all

dev:
	npm run dev

lib:
	npm run lib

gh-pages:
	npm run gh-pages

example:
	npm run example

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install-all\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t---  开发模式"
	@echo "   \033[35mmake lib\033[0m\t\033[0m\t---  编译项目，生成目标文件"
	@echo "   \033[35mmake gh-pages\033[0m\t---  发布到github.io"
	@echo "   \033[35mmake example\033[0m\t\033[0m\t--- 查看例子"
	@echo "   \033[35mmake pub\033[0m\t\033[0m\t---  发布到 npm 上"
	@echo "   \033[35mmake pub-all\033[0m\t\033[0m\t---  发布各组件到 npm 上"
