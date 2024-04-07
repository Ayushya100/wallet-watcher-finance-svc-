'use strict';

import {
    validateNewIncomePayload,
    validateNewIinvestmentPayload
} from './validatePayload.controller.js';
import { getCategoryInfoByIdAndType, updateCardAmount } from './shared.controller.js';
import { registerIncome } from './registerIncome.controller.js';
import { registerInvestment } from './registerInvestment.controller.js';
import { registerExpense } from './registerExpense.controller.js';
import { getAllIncomeRecords, getIncomeInfoById } from './getIncomeInfo.controller.js';
import { getAllInvestmentRecords, getInvestmentInfoById } from './getInvestmentInfo.controller.js';
import { getAllExpenseInfo, getExpenseInfoById } from './getExpenseInfo.controller.js';

export default {
    validateNewIncomePayload,
    validateNewIinvestmentPayload,
    getCategoryInfoByIdAndType,
    updateCardAmount,
    registerIncome,
    registerInvestment,
    registerExpense,
    getAllIncomeRecords,
    getIncomeInfoById,
    getAllInvestmentRecords,
    getInvestmentInfoById,
    getAllExpenseInfo,
    getExpenseInfoById
};
