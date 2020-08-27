import Mock from 'mockjs'
import data from './mockData'
Mock.mock('/admin/getUsersList', data.usersData)
