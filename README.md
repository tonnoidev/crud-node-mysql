# crud-node-mysql
git init
git add .
git commit -m "Initial commit"
git remote add origin <project url>
git push -f origin master
The -f option on git push forces the push. If you don't use it, you'll see an error like this:

To git@github.com:roseperrone/project.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:roseperrone/project.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first merge the remote changes (e.g.,
hint: 'git pull') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
