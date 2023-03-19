apt update
apt install -y repo zstd
cd
mkdir a
cd a
export HTAP=$PWD/Download/
mkdir -pv $HTAP
cd $HTAP
#rm -rfv ./*
rm -rfv ./.*
echo "maybe so" > yes.no
mkdir -pv LAW.BR.2.0-01710-8x09w.0 android-rom-source-code-for-jingpad-a1 mtk-watch LNX.LA.3.7.2.1-03710-8x16.0 LA.BR.1.2.3-09910-8x09.0
cd mtk-watch
repo init -u http://github.com/CE1CECL/m --verbose --submodules --no-current-branch --tags --no-partial-clone --use-superproject --clone-bundle --git-lfs --no-repo-verify --manifest-name=mtk-watch.xml
repo sync --jobs=$(nproc --all) --jobs-network=$(nproc --all) --jobs-checkout=$(nproc --all) --force-broken --force-sync --no-manifest-update --detach --no-current-branch --clone-bundle --fetch-submodules --use-superproject --tags --no-prune --verbose --all-manifests --no-repo-verify  
cd $HTAP
cd LAW.BR.2.0-01710-8x09w.0
repo init -u http://github.com/CE1CECL/m --verbose --submodules --no-current-branch --tags --no-partial-clone --use-superproject --clone-bundle --git-lfs --no-repo-verify --manifest-name=LAW.BR.2.0-01710-8x09w.0.xml
repo sync --jobs=$(nproc --all) --jobs-network=$(nproc --all) --jobs-checkout=$(nproc --all) --force-broken --force-sync --no-manifest-update --detach --no-current-branch --clone-bundle --fetch-submodules --use-superproject --tags --no-prune --verbose --all-manifests --no-repo-verify  
cd $HTAP
cd LNX.LA.3.7.2.1-03710-8x16.0
repo init -u http://github.com/CE1CECL/m --verbose --submodules --no-current-branch --tags --no-partial-clone --use-superproject --clone-bundle --git-lfs --no-repo-verify --manifest-name=LNX.LA.3.7.2.1-03710-8x16.0.xml
repo sync --jobs=$(nproc --all) --jobs-network=$(nproc --all) --jobs-checkout=$(nproc --all) --force-broken --force-sync --no-manifest-update --detach --no-current-branch --clone-bundle --fetch-submodules --use-superproject --tags --no-prune --verbose --all-manifests --no-repo-verify  
cd $HTAP
cd LA.BR.1.2.3-09910-8x09.0
repo init -u http://github.com/CE1CECL/m --verbose --submodules --no-current-branch --tags --no-partial-clone --use-superproject --clone-bundle --git-lfs --no-repo-verify --manifest-name=LA.BR.1.2.3-09910-8x09.0.xml
repo sync --jobs=$(nproc --all) --jobs-network=$(nproc --all) --jobs-checkout=$(nproc --all) --force-broken --force-sync --no-manifest-update --detach --no-current-branch --clone-bundle --fetch-submodules --use-superproject --tags --no-prune --verbose --all-manifests --no-repo-verify  
cd $HTAP
ZSTD_CLEVEL=99 tar -I zstd -cvf m.zst ./*
