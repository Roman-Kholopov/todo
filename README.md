# Todo Application
-----
1. На ветке **create_react_element** добавлен новый элемент **el**.
2. На ветке **create_react_components** импортированы react & reaactDOM. Cозданы новые компоненты:
    + **AppHeader**
    + **SearchPanel**
    + **TodoList**
3. На ветке **getting_to_know_jsx** нет ничего важного, просто знакомство с **JSX**.
4. На ветке **application_structure_refactoring** произведён рефакторинг структуры приложения - теперь отдельные компоненты - это отделные .js файлы в папке ./components.
5. На ветке **using_more_destructuring_and_props** практиковался больше использовать деструктуризацию и props. Так же удалил закоменнтированный и просто лишний код.
6. На ветке **refactor_todolist_component** был переписан TodoList компонент. Теперь он в пропсах получает массив с нужными данными для компонента TodoListItem. Так же в index.js добавлен новый объект todoData, из которого теперь приходят данные для компонента TodoListItem.
7. На ветке **importing_css** импортировал css.
8. На ветке **second_structure_refactoring_app** отдельные компоненты размещены в отдельных папках, обновлены импорты, компонент App вынесен из index.js в отдельный компонент.
9. На ветке **class_components** произведён рефакторинг 2-х компонентов: TodoListItem и ItemStatusFilter. Они переписаны с функциональных на классовые компоненты.
10. На ветке **adding_logic_to_the_todolistitem_component** добавлен onClick.
11. На ветке **use_setState_in_todoListItem** был добавлен setState для изменения состояния todoListItem.
12. На ветке **logic_for_delete_button** написана логика для удаления todoListItem по нажатию на кнопку удаления.
13. На ветке **add_Item_button** написана логика для добавления todoListItem по нажатию на кнопку Add Item (пока туда прокидывается текст из компонента ItemAddForm).
14. На ветке **update_app_component** обновлен компонент App.
15. На ветке **refactor_app_component** данные записаны с state. Теперь все изменения происходят только в app.js.
16. На ветке **create_logit_to_add-form** данные записаны с state. Теперь все изменения происходят только в app.js.
17. На ветке **create_logic_for_search_panel** сделана логика в компонентах App и SearchPanel.
18. На ветке **logic_item_status_filter** написана логика для компонента ItemStatusFilter, внесены изменения в App компонент. Приложение полностью закончено.