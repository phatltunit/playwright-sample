import { test } from '@playwright/test';
import { testResponse } from '../utils/responseUtil';
import { BASE_URL } from '../env';



const bonusUrl = [
    'quarterly-active-bonus',
    'rookie-bonus',
    'rookie-bonus-detail',
    'monthly-personal-bonus',
    'monthly-personal-bonus-detail',
    'quarterly-bonus',
    'quarterly-bonus-detail',
    'elite-bonus',
    'elite-bonus-detail',
    'quarterly-active-bonus-hist',
    'rookie-bonus-hist',
    'rookie-bonus-hist-detail',
    'monthly-personal-bonus-hist',
    'monthly-personal-bonus-hist-detail',
    'quarterly-bonus-hist',
    'quarterly-bonus-hist-detail',
    'elite-bonus-hist',
    'elite-bonus-hist-detail',
    'commission-bonus',
    'commission-bonus-detail',
    'persistency-personal-bonus',
    'persistency-personal-bonus-detail',
    'commission-bonus-hist',
    'commission-bonus-hist-detail',
    'persistency-personal-bonus-hist',
    'persistency-personal-bonus-hist-detail',
    'sfpg-bonus',
    'sfpg-bonus-hist',
    'sfpg-bonus-detail',
    'sfpg-bonus-hist-detail',
    'indirrect-override-bonus',
    'indirrect-override-bonus-hist',
    'whole-team-bonus',
    'whole-team-bonus-hist',
    'whole-team-bonus-detail',
    'whole-team-bonus-hist-detail',
    'quarterly-sf-bonus',
    'quarterly-sf-bonus-hist',
    'quarterly-sf-bonus-detail',
    'quarterly-sf-bonus-hist-detail',
    'persistency-for-leader-bonus',
    'persistency-for-leader-bonus-hist',
    'persistency-for-leader-bonus-detail',
    'persistency-for-leader-bonus-hist-detail',
    'sfdd-bonus',
    'sfdd-bonus-hist',
    'builder-fm-bonus',
    'builder-fm-bonus-hist',
    'builder-fm-bonus-detail',
    'builder-fm-bonus-hist-detail',
    'rookie-al-bonus',
    'rookie-al-bonus-hist',
    'promotion-bonus',
    'promotion-bonus-hist',
    'elite-leader-bonus',
    'elite-leader-bonus-hist',
    'elite-leader-bonus-detail',
    'elite-leader-bonus-hist-detail'
];


bonusUrl.forEach((url) => {
    test(`Test ${url} show report`, async ({ page }) => {
        await page.goto(`${BASE_URL}/bonus-report/${url}/list`);
        // test the search function
        await page.locator('#btnSearch').click();
        // waiting for the response and check the status to ensure the search function is working.
        await testResponse(page, '**/ajaxList');

    });
}
);