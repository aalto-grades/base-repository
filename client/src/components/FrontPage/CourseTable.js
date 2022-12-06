// SPDX-FileCopyrightText: 2022 The Aalto Grades Developers
//
// SPDX-License-Identifier: MIT

import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import CourseTableRow from './CourseTableRow';
import CourseHeadTableRow from './CourseHeadTableRow';

//used to sort the table rows by course code
function sortByCode(a, b) {
  const codeA = a.toUpperCase();
  const codeB = b.toUpperCase();
  if (codeA < codeB) {
    return -1;
  }
  if (codeA > codeB) {
    return 1;
  }
  return 0;
}

const CourseTable = ({data}) => {
  return(
    <Table>
      <TableHead>
        <CourseHeadTableRow/>
      </TableHead>
      <TableBody>
        {data.sort((a, b) => sortByCode(a.courseCode, b.courseCode))
          .slice()
          .map((course) => (
            <CourseTableRow course={course} key={course.id}/>
          ))}
      </TableBody>
    </Table>
  );
};

CourseTable.propTypes = {
  data: PropTypes.array
};
    
export default CourseTable;