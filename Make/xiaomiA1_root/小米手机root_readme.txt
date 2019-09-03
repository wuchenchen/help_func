小米A1手机root:(20190828 add, oneplus 5 root 也是一样的流程，注意先升级android
studio sdk）

root 会wipe清除手机上所有的数据，要在装程序，存资料之前做。

1.下载magisk manager 和 magisk flashable zip
    https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445 
放到手机sd/data里去。

2.Download mohancm twrp recovery (recovery-3.2.1-2-oreo)
    https://forum.xda-developers.com/mi-a1/development/recovery-twrp-3-1-1-0-touch-recovery-t3688472

https://dl.twrp.me/cheeseburger/  （oneplus 5 对应的是cheeseburger）
放到fastboot文件夹里去，或者在电脑上cd到该位置

3.在手机设置里，开发者模式，开启OEM unlocking

4.手机关机，然后同时按“音量-”和“开机键”进入fastboot模式

5.电脑进入终端，运行： fastboot devices
    应该会输出连接手机的字符串

6.fastboot oem unlock（实际不需要执行）

7.fastboot boot twrp-3.2.3-1-tissot.img
    意思大概是从这个recovery来boot

8.install magisk 18.zip（版本会有更新）

9.reboot，在magisk的manager app中即可看到已经root。
    还可以安装很多modules。


