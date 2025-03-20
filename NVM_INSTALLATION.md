## NVM
- **NVM** is a version manager for node.js, designed to be installed per-user and invoked per shell. 
- **NVM** works on any POSIX-complian shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, maxOS, and windows WSL.

## WSL (Windows Subsytem for Linux) and Windows are separate environments, and they operate independently of each other.
- The reason why they are separated is that WSL is designed to provided a Linux-compatible environment on Windows, allowing developers to run Linux tools and applications without leaving Windows.
- However, it is not a full virtual machine, so it maintains a separation between the Linux and Windows environments to avoid conflicts and ensure compatibility.

- WSL (Ubuntu) has its own Linux file system, which is isolated from the Windows file system.
- Windows has its own file system, which is not directly accessible to Linux tools in WSL unless explicitly mounted.
- 

### $ nvm use 16
- Now using node v16.9.1 (npm v7.21.1)
- $ node -v
- v16.9.1

### $ nvm use 14
- Now using node v14.18.0 (npm v6.14.15)
- $ node -v
- v14.18.0

### $ nvm install 12
- Now using node v12.22.6 (npm v6.14.5)
- $ node -v
- v12.22.6

### Windows Powershell Administrator
- wsl --install
- wsl.exe -d Ubuntu'
- wsl.exe - is the executable for the Windows Subsystem for Linux. Allows you to run Linux distributions directly on Windows without the need for a virtual machine.
- -d: thie flag stands for "distribution." It is used to specify which Linux distribution you want to start.
- Ubuntu: The name of the Linux distribution you want to start. In this case it is Ubunt, but it could be any other distribution you have intalled, such as Debian, Kali, Linux, etc.

- Distribution successfully installed. It can be launched via 'wsl.exe -d Ubuntu'
PS C:\WINDOWS\system32> wsl.exe -d Ubuntu
Provisioning the new WSL instance Ubuntu
This might take a while...
Create a default Unix user account: ivnvrgs_dev
New password:
Retype new password:
passwd: password updated successfully
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

Welcome to Ubuntu 24.04.2 LTS (GNU/Linux 5.15.167.4-microsoft-standard-WSL2 x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Wed Mar 19 14:44:24 PST 2025

  System load:  0.01                Processes:             31
  Usage of /:   0.1% of 1006.85GB   Users logged in:       0
  Memory usage: 11%                 IPv4 address for eth0: 172.29.140.53
  Swap usage:   0%

This message is shown once a day. To disable it please create the
/home/ivnvrgs_dev/.hushlogin file.
ivnvrgs_dev@LAPTOP-IV1FJBIE:/mnt/c/WINDOWS/system32$


