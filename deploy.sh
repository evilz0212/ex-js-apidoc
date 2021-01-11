# 打包
apidoc -i api/ -o doc/

# 新增至暫存分支 (強制加入doc資料夾)
git checkout -b temp
git add -f doc
git commit --allow-empty -m 'Initial doc subtree commit'

# 分割 doc 資料夾至 gh-pages 分支
git subtree split --rejoin --prefix doc -b gh-pages
git push -f origin gh-pages

# 切回主分支，刪除本地暫存分支
git checkout master
git branch -D gh-pages temp