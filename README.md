# company-list


### Stack
TypeScript
React + Vite
Feature-Sliced Design
Redux-toolkit


### Описание:
Слева имеется таблица со списком компаний.
Справа - таблица сотрудников выбранной компании.

Данные таблиц хранится в сторе.

Данные для таблиц "компании" и "сотрудники" - mock.


Шапка таблицы "компании": Чекбокс “Выделить всё”

Тело таблицы имеет столбцы: | Чекбокс | Название компании | Кол-во сотрудников | Адрес

При клике по чекбоксу в строке, соответствующая строка выделяется цветом.
При клике по чекбоксу “Выделить всё” - выделяются все строки.

При выделении одной компании - справа, в таблице "сотрудники", видим данные сотрудников этой компании.


Шапка таблицы "сотрудники": Чекбокс “Выделить всё”

Тело таблицы имеет столбцы: | Чекбокс | Фамилия | Имя | Должность

В таблице "сотрудники" при клике по чекбоксу в строке, соответствующая строка выделяется цветом.

Если не выделена ни одна из компаний, то таблица "сотрудники" не видна.

Все поля таблиц редактируемые кроме счётчика сотрудников в таблице "компании".

В обеих таблицах реализован механизм добавления/удаления компаний/сотрудников по соответствующим кнопкам.
Удаление может быть множественное(если выделены несколько строк).

При добавлении/удалении сотрудников у компании, счётчик сотрудников в таблице "компании" обновляется.
