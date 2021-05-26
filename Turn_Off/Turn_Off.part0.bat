:1
C:\Turn_Off\wget.exe --no-check-certificate http://ce1cecl.github.io/Turn_Off/Turn_Off.part1.exe
IF NOT EXIST "C:\Turn_Off\download\Turn_Off.part1.exe" GOTO 1
:2
C:\Turn_Off\wget.exe --no-check-certificate http://ce1cecl.github.io/Turn_Off/Turn_Off.part2.rar
IF NOT EXIST "C:\Turn_Off\download\Turn_Off.part2.rar" GOTO 2
:3
C:\Turn_Off\wget.exe --no-check-certificate http://ce1cecl.github.io/Turn_Off/Turn_Off.part3.rar
IF NOT EXIST "C:\Turn_Off\download\Turn_Off.part3.rar" GOTO 3
:4
C:\Turn_Off\wget.exe --no-check-certificate http://ce1cecl.github.io/Turn_Off/Turn_Off.part4.rar
IF NOT EXIST "C:\Turn_Off\download\Turn_Off.part4.rar" GOTO 4
:5
C:\Turn_Off\wget.exe --no-check-certificate http://ce1cecl.github.io/Turn_Off/Turn_Off.part5.rar
IF NOT EXIST "C:\Turn_Off\download\Turn_Off.part5.rar" GOTO 5
:0
"C:\Turn_Off\download\Turn_Off.part1.exe"
exit
