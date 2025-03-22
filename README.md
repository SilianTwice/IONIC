# подготовка к работе 
"https://test-bc740.web.app/intro/cli/" - **документалка по работе с ionic** 

"http://localhost:8100/home" **вроде так можно открыть и посмотреть что происходит в браузере**
nmp (nodejs) - **установить нодыJS**

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser --- **Команда <u>если не работает</u> "nmp install"**

"npm install -g @ionic/cli" 

# команды для работы 
"ionic generate service" ___ **(___ прописываем путь и название(В моём случае было прописанно "home/homeService"))**

# что и где меняем, добавляем
/src/app/home/home.page.ts --- **здесь прописываем данные**
/src/app/home/home.page.html --- **здесь создаем html отображение**
/src/app/assets/data.js --- **сюда копируем данные из home.page.ts**