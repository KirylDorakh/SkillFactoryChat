# E6_Chat
# **Запуск проекта**
1. Установить redis и запустить его:

   `redis-server`

Если вы используете ос Windows, то предпочтительно пользоваться Redis средствами Docker либо WSL2!

   `docker run --name redis-server -d redis`

2. Скачать проект:

   `git clone 'https://github.com/KirylDorakh/SkillFactoryChat.git'`

3. Создать виртуальное окружение:

   `python -m venv venv (python3 -m venv venv)`
4. Активировать виртуальное окружение:

   `venv\Scripts\activate.bat` - для Windows;

   `source venv/bin/activate `- для Linux и MacOS.
5. Установить модули для работы приложения:

   `pip install -r requirements.txt`

6. Запустить сервер:

   `python manage.py runserver`

7. Проверить адрес: 
  `http://localhost:8000`
