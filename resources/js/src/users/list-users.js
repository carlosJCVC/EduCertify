import userStore from './Infrastructure/store/user.store';
import { renderUserEvents } from './Application/events/user-events';
import { listUsersUsingDataTable } from './Application/useCases/list-users.usecase';

const ListUserApp = () => {
    userStore.initStore();

    (() => {
        listUsersUsingDataTable();
    })();

    renderUserEvents();
}

ListUserApp()