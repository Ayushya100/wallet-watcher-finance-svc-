'use strict';

import {
    isCategoryByNameAvailable,
    createNewCategory,
    getAllCategoryInfo,
    getCategoryInfoById,
    getCategoryInfoByType,
    updateCategoryName,
    deleteCategoryById,
    getCategoryInfoByIdAndType,
    getUserFinanceById,
    updateUserFinance,
    createNewIncomeRecord,
    updateCardAmount,
    deleteIncomeRecord,
    createNewInvestmentRecord,
    deleteInvestmentRecord,
    createNewExpenseRecord,
    createNewCrdExpenseRecord,
    deleteExpenseRecord,
    deleteCrdExpenseRecord
} from './finance.db.js';
import {
    getIncomeRecords
} from './financeRecords.db.js';

export default {
    isCategoryByNameAvailable,
    createNewCategory,
    getAllCategoryInfo,
    getCategoryInfoById,
    getCategoryInfoByType,
    updateCategoryName,
    deleteCategoryById,
    getCategoryInfoByIdAndType,
    getUserFinanceById,
    updateUserFinance,
    createNewIncomeRecord,
    updateCardAmount,
    deleteIncomeRecord,
    createNewInvestmentRecord,
    deleteInvestmentRecord,
    createNewExpenseRecord,
    createNewCrdExpenseRecord,
    deleteExpenseRecord,
    deleteCrdExpenseRecord,
    getIncomeRecords
};
