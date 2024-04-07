'use strict';

import mongoose from 'mongoose';

// Add DB Models
import {
    IncDetailsModel,
    CardInfoModel,
    UserWalletCategoryModel,
    executeAggregation
} from 'lib-common-service';

const getIncomeRecords = async(userId, recordId = null, fieldsToDisplay) => {
    const recordsToMatch = {
        userId: new mongoose.mongoose.Types.ObjectId(userId),
        isDeleted: false
    };
    if (recordId) {
        recordsToMatch._id = new mongoose.mongoose.Types.ObjectId(recordId);
    }

    const isRecordsAvailable = IncDetailsModel.aggregate([
        {
            $match: recordsToMatch
        },
        {
            $lookup: {
                from: 'cardinfos',
                localField: 'cardToken',
                foreignField: 'token',
                as: 'cardResult'
            }
        },
        {
            $lookup: {
                from: 'userwalletcategories',
                localField: 'categoryId',
                foreignField: '_id',
                as: 'categoryResult'
            }
        },
        {
            $match: {
                'cardResult.isDeleted': false,
                'categoryResult.isDeleted': false
            }
        },
        {
            $addFields: {
                cardNumber: {
                    $arrayElemAt: ['$cardResult.cardNumber', 0]
                },
                categoryName: {
                    $arrayElemAt: ['$categoryResult.categoryName', 0]
                }
            }
        },
        {
            $project: fieldsToDisplay
        }
    ]);
    return await executeAggregation(isRecordsAvailable);
}

export {
    getIncomeRecords
};
