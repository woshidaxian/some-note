## NVM
node version manager node.js的版本管理工具，允许一台电脑上安装多个版本的node，解决某些应用程序运行需要不同node版本的问题  

### 开始前
请确保已经删除电脑原先安装的node

### 安装nvm
  - 1. 下载nvm安装包[https://nvm.uihtm.com/](https://nvm.uihtm.com/)
  - 2. clone nvm代码仓库安装


### 使用Git安装过程如下
- 使用以下命令从 NVM 的 GitHub 存储库克隆代码
  ```bash
  git clone https://github.com/nvm-sh/nvm.git ~/.nvm
  ```
- 切换到 .nvm 目录
  ```bash
  cd ~/.nvm
  ```
- 查看可用的 NVM 版本，然后选择要安装的版本。您可以使用以下命令查看可用的 NVM 版本列表，然后使用git checkout vx 切换版本
  ```bash
  git tag
  ```
- 选择要安装的 Node.js 版本。例如，如果您要安装 Node.js 12，可以运行以下命令
  ```
  nvm install 12
  ```
- 安装完成后，您可以使用以下命令设置默认的 Node.js 版本：
  ```bash
  nvm use 12
  ```
- 您还可以使用以下命令检查已安装的 Node.js 版本
  ```bash
  nvm ls
  ```
- 为了使 NVM 配置永久生效，您可以将以下命令添加到您的 shell 配置文件（例如 ~/.bashrc、~/.zshrc 或 ~/.profile）中
  ```bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # 这行代码加载 NVM
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # 这行代码加载 NVM 的自动补全功能

  ```

### nvm 命令
```bash
nvm ls-remote # 远程可用node版本目录

nvm run node --version # 查看当前使用的node版本

nvm which [version] # 查看置顶版本的安装路径
```

### 卸载nvm
```bash
rm -rf "$NVM_DIR"
```
然后删除shell resource config
~/.bash_profile
~/.bashrc
~/.profile