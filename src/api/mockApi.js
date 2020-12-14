import Mock from 'mockjs'
import data from './mockData'
Mock.mock(/\/admin\/getUsersList/, data.usersData)
Mock.mock(/\/admin\/getUserDetail/, data.userDetail)
