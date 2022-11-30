// SPDX-FileCopyrightText: 2022 The Aalto Grades Developers
//
// SPDX-License-Identifier: MIT

import { QueryInterface, Transaction } from 'sequelize';
import fs from 'fs';
import path from 'path';
const users: string = fs.readFileSync(path.resolve(__dirname, '../../../../mockdata/users.sql'), 'utf8');
const courses: string = fs.readFileSync(path.resolve(__dirname, '../../../../mockdata/courses.sql'), 'utf8');
const courseInstances: string = fs.readFileSync(path.resolve(__dirname, '../../../../mockdata/course_instances.sql'), 'utf8');
const courseTranslation: string = fs.readFileSync(path.resolve(__dirname, '../../../../mockdata/course_translations.sql'), 'utf8');

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    const transaction: Transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.sequelize.query(users, { transaction });
      await queryInterface.sequelize.query(courses, { transaction });
      await queryInterface.sequelize.query(courseInstances, { transaction });
      await queryInterface.sequelize.query(courseTranslation, { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      console.log(error);
    }
  },
  down: async (queryInterface: QueryInterface): Promise<void> => {
    const transaction: Transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('course_translation', {}, { transaction });
      await queryInterface.bulkDelete('course_instance', {}, { transaction });
      await queryInterface.bulkDelete('course', {}, { transaction });
      await queryInterface.bulkDelete('user', {}, { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      console.log(error);
    }
  },
};
