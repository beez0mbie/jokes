https://habr.com/ru/company/ruvds/blog/436890/

Занятие 20. Практикум. Свойства компонентов, стилизация

→ Оригинал

▍Задание

Создайте новый проект React-приложения.
Выведите на странице приложения компонент App, код которого должен находиться в отдельном файле.
Компонент App должен выводить 5 компонентов Joke, содержащих анекдоты. Выведите эти компоненты так, как вам хочется.
Каждый компонент Joke должен принимать и обрабатывать свойство question, для основной части анекдота, и свойство punchLine — для его ключевой фразы.

▍Дополнительное задание

Некоторые анекдоты целиком состоят из ключевой фразы. Например: «It’s hard to explain puns to kleptomaniacs because they always take things literally». Подумайте над тем, как компонент Joke может вывести лишь переданное ему свойство punchLine, в том случае, если свойство question не задано. Поэкспериментируйте со стилизацией компонентов.

Если хотите — можете поэкспериментировать с этими методами. Скажем, попытайтесь воспользоваться методом filter() и убрать из вывода, формируемого компонентом App, те экземпляры компонента Joke, свойство question которых не превышает заданную длину. Или сделайте так, чтобы в вывод попали бы только компоненты, для которых задано и свойство question, и свойство punchLine.