// SPDX-FileCopyrightText: 2022 The Aalto Grades Developers
//
// SPDX-License-Identifier: MIT

import app = require('../src/index');
import supertest = require('supertest');

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Test GET /', () => {
  it('should respond "Hello /" with status code 200', () => {
    request.get('/')
      .then(res => {
        expect(res.text).toBe('Hello /');
        expect(res.statusCode).toBe(200);
      });
  });
});