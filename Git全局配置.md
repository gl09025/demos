# Git全局配置

git config --global user.name xxx #方便产品经理找（怼）你
git config --global user.email yyy #方便产品经理找（怼）你
git config --global push.default simple 
git config --global core.quotepath false #防止文件名变成数字
git config --global core.editor "vim" #使用vim编辑提交信息
git config --global core.ignorecase false #让git区分大小写



# 错误收集

1.

> fatal: refusing to merge unrelated histories

新仓库初始化了readme或者有人提交了新内容.

解决:加如下选项

> –allow-unrelated-histories