@echo off
:C
mkdir %SystemDrive%\trash
color 39
title Are you Trash?YOU DID NOT CHOOSE YET  BY: ChrisEric1 CECL christopherericlentocha@gmail.com
cls
echo Are You Trash?
echo 1. Yes
echo 2. IDK
echo 3. NOT AT ALL, YOU ARE THE TRASH ONE
CHOICE /N /C 123 /M "CHOOSE NOW!!!!"
IF ERRORLEVEL 3 GOTO N
IF ERRORLEVEL 2 GOTO IDK
IF ERRORLEVEL 1 GOTO Y

:Y
title Are you Trash?YOU CHOSE 1 THE 1st TIME! BY: ChrisEric1 CECL christopherericlentocha@gmail.com
cls
if exist %SystemDrive%\trash\y\y\1 GOTO Y1
if exist %SystemDrive%\trash\n\n\1 GOTO N1
if exist %SystemDrive%\trash\IDK\IDK\1 GOTO IDK1
color 2A
echo YES YOU ARE TRASH, TANKS FOR ADMITTING IT BUT I WANT YOU TO DO SOMETHING
echo LEAVE ME NOW!!!!
mkdir %SystemDrive%\trash\y\y\1
pause
cls
exit

:Y1
if exist %SystemDrive%\trash\y\y\2 GOTO N2
color 2A
cls
echo I SAW YOU ALREADY ADMITTED YOU ARE TRASH, I DON'T NEED TO KNOW AGAIN, 
echo GRRRRRRRR!!!!!!!!!!!!!
mkdir %SystemDrive%\trash\y\y\2
pause
cls
exit

:IDK
title Are you Trash?YOU CHOSE 2 THE 1st TIME! BY: ChrisEric1 CECL christopherericlentocha@gmail.com
if exist %SystemDrive%\trash\IDK\IDK\1 GOTO IDK1
if exist %SystemDrive%\trash\n\n\1 GOTO N1
if exist %SystemDrive%\trash\y\y\1 GOTO Y1
color 6E
cls
echo I KNOW THE ANSWER, YOU ARE TRASH 99.9+1 SO YOU SHALL
echo LEAVE ME NOW!!!!
mkdir %SystemDrive%\trash\IDK\IDK\1
pause
cls
exit

:IDK1
if exist %SystemDrive%\trash\n\n\2 GOTO N2
color 6E
cls
echo I ALREADY TOLD YOU THAT YOU ARE TRASH SO DONT ASK ME AGAIN CUZ YOU ARE TRASH
mkdir %SystemDrive%\trash\n\n\2\
pause
cls
exit

:N
title Are you Trash?YOU CHOSE 3 THE 1st TIME! BY: ChrisEric1 CECL christopherericlentocha@gmail.com
if exist %SystemDrive%\trash\n\n\1 GOTO N1
if exist %SystemDrive%\trash\IDK\IDK\1 GOTO IDK1
if exist %SystemDrive%\trash\y\y\1 GOTO Y1
color 4C
cls
echo YES YOU ARE YOU IDIOT, YOU ARE TRSH, TANKS FOR NOT ADMITTING BUT YOU MAY NOW
echo LEAVE ME NOW FOR GOOD YOU PIECE OF TRASH YOU ARE AS WHAT IT SAID ON WIKIPEDIA
mkdir %SystemDrive%\trash\n\n\1\
pause
cls
exit

:N1
if exist %SystemDrive%\trash\n\n\2 GOTO N2
color 4C
cls
echo YOU ALREADY TOLD ME THAT YOU ARE NOT TRASH, LEAVE MY ALONE, GO AWAY, AND
echo DON'T ASK ME AGAIN, GRRRRRR!!!!!!!!!!!!!!!!!!!!!!!
mkdir %SystemDrive%\trash\n\n\2\
pause
cls
exit

:N2
title Are you Trash?YOU CHOSE ? THE 1st TIME! BY: ChrisEric1 CECL christopherericlentocha@gmail.com
if exist %SystemDrive%\trash\n\n\3 GOTO N3
color 4C
cls
echo LAST WARNING!!!!, YOU DON'T WANT TO TRY THIS AGAIN!!!!
mkdir %SystemDrive%\trash\n\n\3\
pause
cls
exit

:N3
color 4C
cls
echo WE HAVE OPENED INTERNET EXPLORER BECAUSE YOU SUCK AND I KNOW YOU LIKE 
echo INTERNET EXPLORER, WE ALSO DID BECAUSE YOU USED THIS FILE TOO MAY 
echo TIMES!!!!
%SYSTEMDrive%
cd %ProgramFiles%
cd Internet Explorer
iexplore.exe https://gist.githubusercontent.com/CE1CECL/c2addf0cadfe023f3fe7bdfea387091c/raw/bad3bf6395a7cc3a0c8ca361927cd86005935d63/TRASHv1.0&2
pause
cls
exit
