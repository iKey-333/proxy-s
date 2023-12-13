export default function Lang(onlyCurrentLang = false) {
    let currentLanguage = localStorage.getItem('currentLanguage');
    if (!currentLanguage) {
        currentLanguage = 'ru';
    }

    if (onlyCurrentLang === true) {
        let data;

        if (currentLanguage === 'ru') {
            data = {
                currentLanguage: 'Русский',
                icon: 'emojione-v1:flag-for-russia'
            }
        }

        if (currentLanguage === 'ua') {
            data = {
                currentLanguage: 'Український',
                icon: 'emojione-v1:flag-for-ukraine'
            }
        }

        if (currentLanguage === 'en') {
            data = {
                currentLanguage: 'English',
                icon: 'la:flag-usa'
            }
        }
        return data;
    }

    let languages = {};

    let ru = {
        'popup-select-proxy': 'Выберите прокси для подключения',
        'popup-button-connect': 'Подключить',
        'popup-no-proxy': 'У вас пока нет включенных прокси',
        'popup-add-proxy': 'Добавить',
        'popup-disconnect-proxy': 'Выключить',
        'popup-menu-settings': 'Настройки',
        'popup-menu-my-ip': 'Мой IP адрес',
        'popup-sign-up': 'Вход для клиентов Proxy-solutions',

        'header-sign-in': 'Вход для клиентов Proxy-solutions',
        'header-exit': 'Выход',

        'main-menu-proxy': 'Настройки прокси',
        'main-menu-templates': 'Настройки шаблонов',
        'main-menu-my-ip': 'Мой IP адрес',
        'main-menu-log': 'Лог',
        'main-menu-about': 'О нас',

        'proxy-title': 'Настройки прокси',
        'proxy-sync': 'Синхронизировать настройки',
        'proxy-sync-tooltip': 'Для удобства работы с расширением и переноса всех настроек на новое устройство (при условии использования в браузере того же google аккаунта)',
        'proxy-button-add': 'Добавить прокси',
        'proxy-button-add-lk': 'Добавить прокси из личного кабинета',
        'proxy-button-import': 'Импорт прокси',

        'proxy-empty-title': 'У вас нет каких-либо прокси настроек.',
        'proxy-empty-info': 'Начните с добавления прокси.',
        'proxy-empty-add': 'Добавить',

        'proxy-table-th1': 'Название',
        'proxy-table-th2': 'IP адрес',
        'proxy-table-th3': 'Цвет',
        'proxy-table-th4': 'Включен',
        'proxy-table-b-templates': 'Шаблоны',

        'proxy-del-selected': 'Удалить выбранные прокси',

        'templates-title': 'Настройки шаблонов',
        'templates-new': 'Новый шаблон',
        'templates-empty': 'У вас нет созданных шаблонов.',
        'templates-empty-new': 'Создать новый',
        'templates-table-th1': 'Название',
        'templates-table-th2': 'Шаблон',
        'templates-table-th3': 'Тип',
        'templates-table-th4': 'SSL-сертификат',
        'templates-table-th5': 'Включен',

        'log-title': 'Лог',
        'log-label': 'Лог',
        'log-tooltip': 'Записывать журнал посещений страниц сайтов',
        'log-description': 'Строка в этом журнале не означает, что URL-адрес успешно загружен. В журнале показано только то, как были предприняты попытки загрузить URL-адреса. Если прокси-сервер не отвечает или возникла какая-либо другая проблема, которая помешала загрузке URL-адреса, URL-адрес все равно отображается здесь.',
        'log-table-th1': 'Время',
        'log-table-th2': 'Статус',
        'log-table-th3': 'Название прокси',
        'log-table-th4': 'URL',
        'log-table-no-proxy': 'Без прокси',
        'log-info': 'Лог сохраняет последние 50 сайтов. Более старые логи удаляются.',

        'about-title': 'О нас',

        'modal-import-title': 'Импорт прокси',
        'modal-import-select-template': 'Выберите шаблон из списка ниже или введите свой.',
        'modal-import-select-template-label': 'Выберите шаблон',
        'modal-import-select-option-0': 'Выбрать',
        'modal-import-select-option-999': 'Ввести шаблон вручную',
        'modal-import-input-mask': 'Введите маску шаблона',
        'modal-import-mask-host': 'вместо подставиться ip адрес',
        'modal-import-mask-port': 'вместо подставиться порт',
        'modal-import-mask-user': 'вместо подставиться логин',
        'modal-import-mask-pass': 'вместо подставиться пароль',
        'modal-import-input-label': 'Список прокси',
        'modal-import-replaced': 'Перезаписать имеющиеся прокси',
        'modal-import-replaced-tooltip': 'Включите чтобы заменить все имеющиеся  прокси новыми из этого списка.',
        'modal-import-b-save': 'Сохранить',
        'modal-import-b-cancel': 'Отмена',

        'modal-add-proxy-title': 'Добавление прокси',
        'modal-add-proxy-name-label': 'Название или описание:',
        'modal-add-proxy-name-label-not-require': '(необязательно)',
        'modal-add-proxy-name-ph': 'Название или описание',
        'modal-add-proxy-color-label': 'Цвет прокси в таблице:',
        'modal-add-proxy-type-label': 'Тип прокси:',
        'modal-add-proxy-ip-label': 'IP адрес или имя DNS:',
        'modal-add-proxy-port-label': 'Порт:',
        'modal-add-proxy-auth-require-label': 'Прокси требует авторизации',
        'modal-add-proxy-username-label': 'Имя пользователя:',
        'modal-add-proxy-password-label': 'Пароль:',
        'modal-add-proxy-b-save': 'Сохранить',
        'modal-add-proxy-b-cancel': 'Отмена',

        'modal-edit-proxy-title': 'Редактировать прокси',

        'modal-delete-single-proxy-title': 'Удалить прокси',
        'modal-delete-single-proxy-approve': 'Подтвердите удаление прокси:',
        'modal-delete-single-proxy-b-ok': 'Удалить',
        'modal-delete-single-proxy-b-cancel': 'Отмена',

        'modal-delete-multi-proxy-title': 'Удалить прокси',
        'modal-delete-multi-proxy-approve': 'Подтвердите удаление выбранных прокси',
        'modal-delete-multi-proxy-amt': 'шт.',

        'modal-add-proxy-lk-title-auth-1': 'Добавление прокси из личного кабинета',
        'modal-add-proxy-lk-title-auth-2': 'Вход для клиентов Proxy-solutions',
        'modal-add-proxy-lk-no-auth': 'Вы еще не авторизованы.',
        'modal-add-proxy-lk-label-my-code': 'Ваш код доступа:',
        'modal-add-proxy-lk-select-order-label': 'Выберите заказ:',
        'modal-add-proxy-lk-empty-orders': 'У вас нет активных заказов...',
        'modal-add-proxy-lk-select-all-label': 'Выбрать все',
        'modal-add-proxy-lk-b-auth': 'Авторизоваться',
        'modal-add-proxy-lk-b-add': 'Добавить',
        'modal-add-proxy-lk-b-cancel': 'Отмена',

        'modal-add-template-title': 'Добавление шаблона',
        'modal-add-template-name-label': 'Название:',
        'modal-add-template-name-ph': 'Введите название',
        'modal-add-template-template-label': 'Шаблон:',
        'modal-add-template-template-ph': 'Введите',
        'modal-add-template-type-label': 'Тип:',
        'modal-add-template-ssl-label': 'SSL-сертификат:',
        'modal-add-template-b-save': 'Сохранить',
        'modal-add-template-b-cancel': 'Отмена',

        'modal-del-s-template-title': 'Удалить шаблон',
        'modal-del-s-template-approve': 'Подтвердите удаление шаблона:',
        'modal-del-s-template-b-ok': 'Удалить',
        'modal-del-s-template-b-cancel': 'Отмена',

        'modal-edit-template-title': 'Редактирование шаблона',

        'modal-error-title': 'Упс...',
        'modal-error-error': 'Ошибка:',
        'modal-error-close': 'Закрыть',

        'placehoder-required': 'Обязательно'
    };

    let en = {
        'popup-select-proxy': 'Select a proxy to connect to',
        'popup-button-connect': 'Connect',
        'popup-no-proxy': 'You do not have any proxies enabled yet',
        'popup-add-proxy': 'Add',
        'popup-disconnect-proxy': 'Disable',
        'popup-menu-settings': 'Settings',
        'popup-menu-my-ip': 'My IP address',
        'popup-sign-up': 'Login for Proxy-solutions clients',

        'header-sign-in': 'Login for Proxy-solutions clients',
        'header-exit': 'Exit',

        'main-menu-proxy': 'Proxy settings',
        'main-menu-templates': 'Template settings',
        'main-menu-my-ip': 'My IP address',
        'main-menu-log': 'Log',
        'main-menu-about': 'About us',

        'proxy-title': 'Proxy settings',
        'proxy-sync': 'Synchronize settings',
        'proxy-sync-tooltip': 'For ease of working with the extension and transferring all settings to a new device (provided you use the same Google account in the browser)',
        'proxy-button-add': 'Add proxy',
        'proxy-button-add-lk': 'Add a proxy from your personal account',
        'proxy-button-import': 'Import proxy',

        'proxy-empty-title': 'You do not have any proxy settings.',
        'proxy-empty-info': 'Start by adding a proxy.',
        'proxy-empty-add': 'Add',

        'proxy-table-th1': 'Name',
        'proxy-table-th2': 'IP address',
        'proxy-table-th3': 'Color',
        'proxy-table-th4': 'Enabled',
        'proxy-table-b-templates': 'Templates',

        'proxy-del-selected': 'Delete selected proxies',

        'templates-title': 'Template settings',
        'templates-new': 'New template',
        'templates-empty': 'You have no templates created.',
        'templates-empty-new': 'Create new',
        'templates-table-th1': 'Title',
        'templates-table-th2': 'Template',
        'templates-table-th3': 'Type',
        'templates-table-th4': 'SSL certificate',
        'templates-table-th5': 'Enabled',

        'log-title': 'Log',
        'log-label': 'Log',
        'log-tooltip': 'Record a log of visits to website pages',
        'log-description': 'A line in this log does not indicate that the URL was loaded successfully. The log only shows how URLs were attempted to load. If the proxy server does not respond or there is some other problem that prevents the URL from loading, the URL will still appear here.',
        'log-table-th1': 'Time',
        'log-table-th2': 'Status',
        'log-table-th3': 'Proxy name',
        'log-table-th4': 'URL',
        'log-table-no-proxy': 'No proxy',
        'log-info': 'Log saves the last 50 sites. Older logs are deleted.',

        'about-title': 'About us',

        'modal-import-title': 'Import proxy',
        'modal-import-select-template': 'Select a template from the list below or enter your own.',
        'modal-import-select-template-label': 'Select a template',
        'modal-import-select-option-0': 'Select',
        'modal-import-select-option-999': 'Enter template manually',
        'modal-import-input-mask': 'Enter template mask',
        'modal-import-mask-host': 'substitute the IP address instead',
        'modal-import-mask-port': 'substitute a port instead',
        'modal-import-mask-user': 'substitute login instead',
        'modal-import-mask-pass': 'substitute a password instead',
        'modal-import-input-label': 'Proxy list',
        'modal-import-replaced': 'Overwrite existing proxies',
        'modal-import-replaced-tooltip': 'Enable to replace all existing proxies with new ones from this list.',
        'modal-import-b-save': 'Save',
        'modal-import-b-cancel': 'Cancel',

        'modal-add-proxy-title': 'Adding a proxy',
        'modal-add-proxy-name-label': 'Name or description:',
        'modal-add-proxy-name-label-not-require': '(optional)',
        'modal-add-proxy-name-ph': 'Name or description',
        'modal-add-proxy-color-label': 'Proxy color in table:',
        'modal-add-proxy-type-label': 'Proxy type:',
        'modal-add-proxy-ip-label': 'IP address or DNS name:',
        'modal-add-proxy-port-label': 'Port:',
        'modal-add-proxy-auth-require-label': 'Proxy requires authorization',
        'modal-add-proxy-username-label': 'Username:',
        'modal-add-proxy-password-label': 'Password:',
        'modal-add-proxy-b-save': 'Save',
        'modal-add-proxy-b-cancel': 'Cancel',

        'modal-edit-proxy-title': 'Edit proxy',

        'modal-delete-single-proxy-title': 'Delete proxy',
        'modal-delete-single-proxy-approve': 'Confirm deletion of proxy:',
        'modal-delete-single-proxy-b-ok': 'Delete',
        'modal-delete-single-proxy-b-cancel': 'Cancel',

        'modal-delete-multi-proxy-title': 'Delete proxy',
        'modal-delete-multi-proxy-approve': 'Confirm deleting the selected proxies',
        'modal-delete-multi-proxy-amt': 'pcs.',

        'modal-add-proxy-lk-title-auth-1': 'Adding a proxy from your personal account',
        'modal-add-proxy-lk-title-auth-2': 'Login for Proxy-solutions clients',
        'modal-add-proxy-lk-no-auth': 'You are not authorized yet.',
        'modal-add-proxy-lk-label-my-code': 'Your access code:',
        'modal-add-proxy-lk-select-order-label': 'Select order:',
        'modal-add-proxy-lk-empty-orders': 'You have no active orders...',
        'modal-add-proxy-lk-select-all-label': 'Select all',
        'modal-add-proxy-lk-b-auth': 'Authorize',
        'modal-add-proxy-lk-b-add': 'Add',
        'modal-add-proxy-lk-b-cancel': 'Cancel',

        'modal-add-template-title': 'Adding a template',
        'modal-add-template-name-label': 'Name:',
        'modal-add-template-name-ph': 'Enter a name',
        'modal-add-template-template-label': 'Template:',
        'modal-add-template-template-ph': 'Enter',
        'modal-add-template-type-label': 'Type:',
        'modal-add-template-ssl-label': 'SSL certificate:',
        'modal-add-template-b-save': 'Save',
        'modal-add-template-b-cancel': 'Cancel',

        'modal-del-s-template-title': 'Delete template',
        'modal-del-s-template-approve': 'Confirm deletion of template:',
        'modal-del-s-template-b-ok': 'Delete',
        'modal-del-s-template-b-cancel': 'Cancel',

        'modal-edit-template-title': 'Editing template',

        'modal-error-title': 'Oops...',
        'modal-error-error': 'Error:',
        'modal-error-close': 'Close',

        'placehoder-required': 'Required'
    };

    let ua = {
        'popup-select-proxy': 'Виберіть проксі для підключення',
        'popup-button-connect': 'Підключити',
        'popup-no-proxy': 'У вас поки немає включених проксі',
        'popup-add-proxy': 'Додати',
        'popup-disconnect-proxy': 'Вимкнути',
        'popup-menu-settings': 'Налаштування',
        'popup-menu-my-ip': 'Моя IP адреса',
        'popup-sign-up': 'Вхід для клієнтів Proxy-solutions',

        'header-sign-in': 'Вхід для клієнтів Proxy-solutions',
        'header-exit': 'Вихід',

        'main-menu-proxy': 'Налаштування проксі',
        'main-menu-templates': 'Налаштування шаблонів',
        'main-menu-my-ip': 'Моя IP адреса',
        'main-menu-log': 'Лог',
        'main-menu-about': 'Про нас',

        'proxy-title': 'Налаштування проксі',
        'proxy-sync': 'Синхронізувати налаштування',
        'proxy-sync-tooltip': 'Для зручності роботи з розширенням та перенесення всіх налаштувань на новий пристрій (за умови використання в браузері того ж google акаунту)',
        'proxy-button-add': 'Додати проксі',
        'proxy-button-add-lk': 'Додати проксі з особистого кабінету',
        'proxy-button-import': 'Імпорт проксі',

        'proxy-empty-title': 'У вас немає проксі налаштувань.',
        'proxy-empty-info': 'Почніть з додавання проксі.',
        'proxy-empty-add': 'Додати',

        'proxy-table-th1': 'Назва',
        'proxy-table-th2': 'IP адреса',
        'proxy-table-th3': 'Колір',
        'proxy-table-th4': 'Увімкнено',
        'proxy-table-b-templates': 'Шаблони',

        'proxy-del-selected': 'Видалити вибрані проксі',

        'templates-title': 'Налаштування шаблонів',
        'templates-new': 'Новий шаблон',
        'templates-empty': 'У вас немає створених шаблонів.',
        'templates-empty-new': 'Створити новий',
        'templates-table-th1': 'Назва',
        'templates-table-th2': 'Шаблон',
        'templates-table-th3': 'Тип',
        'templates-table-th4': 'SSL-сертифікат',
        'templates-table-th5': 'Увімкнено',

        'log-title': 'Лог',
        'log-label': 'Лог',
        'log-tooltip': 'Записувати журнал відвідувань сторінок сайтів',
        'log-description': 'Рядок у цьому журналі не означає, що URL-адреса успішно завантажена. У журналі показано лише те, як спробували завантажити URL-адреси. Якщо проксі-сервер не відповідає або виникла інша проблема, яка завадила завантаженню URL-адреси, URL-адреса все одно відображається тут.',
        'log-table-th1': 'Час',
        'log-table-th2': 'Статус',
        'log-table-th3': 'Назва проксі',
        'log-table-th4': 'URL',
        'log-table-no-proxy': 'Без проксі',
        'log-info': 'Лог зберігає останні 50 сайтів. Старіші логи видаляються.',

        'about-title': 'Про нас',

        'modal-import-title': 'Імпорт проксі',
        'modal-import-select-template': 'Виберіть шаблон зі списку нижче або введіть свій.',
        'modal-import-select-template-label': 'Виберіть шаблон',
        'modal-import-select-option-0': 'Вибрати',
        'modal-import-select-option-999': 'Ввести шаблон вручну',
        'modal-import-input-mask': 'Введіть маску шаблону',
        'modal-import-mask-host': 'замість підставитися адресу ip',
        'modal-import-mask-port': 'замість підставитися порт',
        'modal-import-mask-user': 'замість підставитися логін',
        'modal-import-mask-pass': 'замість підставитися пароль',
        'modal-import-input-label': 'Список проксі',
        'modal-import-replaced': 'Перезаписати наявні проксі',
        'modal-import-replaced-tooltip': 'Увімкніть, щоб замінити всі наявні проксі новими з цього списку.',
        'modal-import-b-save': 'Зберегти',
        'modal-import-b-cancel': 'Скасування',

        'modal-add-proxy-title': 'Додавання проксі',
        'modal-add-proxy-name-label': 'Назва або опис:',
        'modal-add-proxy-name-label-not-require': `(необов'язково)`,
        'modal-add-proxy-name-ph': 'Назва або опис',
        'modal-add-proxy-color-label': 'Колір проксі в таблиці:',
        'modal-add-proxy-type-label': 'Тип проксі:',
        'modal-add-proxy-ip-label': `IP-адреса або ім'я DNS:`,
        'modal-add-proxy-port-label': 'Порт:',
        'modal-add-proxy-auth-require-label': 'Проксі вимагає авторизації',
        'modal-add-proxy-username-label': `Ім'я користувача:`,
        'modal-add-proxy-password-label': 'Пароль:',
        'modal-add-proxy-b-save': 'Зберегти',
        'modal-add-proxy-b-cancel': 'Скасування',

        'modal-edit-proxy-title': 'Редагувати проксі',

        'modal-delete-single-proxy-title': 'Видалити проксі',
        'modal-delete-single-proxy-approve': 'Підтвердіть видалення проксі:',
        'modal-delete-single-proxy-b-ok': 'Видалити',
        'modal-delete-single-proxy-b-cancel': 'Скасування',

        'modal-delete-multi-proxy-title': 'Видалити проксі',
        'modal-delete-multi-proxy-approve': 'Підтвердіть видалення вибраних проксі',
        'modal-delete-multi-proxy-amt': 'шт.',

        'modal-add-proxy-lk-title-auth-1': 'Додавання проксі з особистого кабінету',
        'modal-add-proxy-lk-title-auth-2': 'Вхід для клієнтів Proxy-solutions',
        'modal-add-proxy-lk-no-auth': 'Ви ще не авторизовані.',
        'modal-add-proxy-lk-label-my-code': 'Ваш код доступу:',
        'modal-add-proxy-lk-select-order-label': 'Виберіть замовлення:',
        'modal-add-proxy-lk-empty-orders': 'У вас немає активних замовлень...',
        'modal-add-proxy-lk-select-all-label': 'Вибрати все',
        'modal-add-proxy-lk-b-auth': 'Авторизуватися',
        'modal-add-proxy-lk-b-add': 'Додати',
        'modal-add-proxy-lk-b-cancel': 'Скасування',

        'modal-add-template-title': 'Додавання шаблону',
        'modal-add-template-name-label': 'Назва:',
        'modal-add-template-name-ph': 'Введіть назву',
        'modal-add-template-template-label': 'Шаблон:',
        'modal-add-template-template-ph': 'Введіть',
        'modal-add-template-type-label': 'Тип:',
        'modal-add-template-ssl-label': 'SSL-сертифікат:',
        'modal-add-template-b-save': 'Зберегти',
        'modal-add-template-b-cancel': 'Скасування',

        'modal-del-s-template-title': 'Видалити шаблон',
        'modal-del-s-template-approve': 'Підтвердіть видалення шаблону:',
        'modal-del-s-template-b-ok': 'Видалити',
        'modal-del-s-template-b-cancel': 'Скасування',

        'modal-edit-template-title': 'Редагування шаблону',

        'modal-error-title': 'Упс...',
        'modal-error-error': 'Помилка:',
        'modal-error-close': 'Закрити',

        'placehoder-required': `Обов'язково`
    };

    if (currentLanguage == 'ru') {
        languages = ru;
    }

    if (currentLanguage == 'en') {
        languages = en;
    }

    if (currentLanguage == 'ua') {
        languages = ua;
    }

    return languages;
}