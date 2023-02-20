import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createSchemaData = (key: string, type: string, description: string) => {
  return { key, type, description };
};

const characterData = (resource: string) => {
  switch (resource) {
    case 'character':
    default:
      return [
        createSchemaData('id', 'integer', 'The unique identifier for the character.'),
        createSchemaData('name', 'string', 'The name of the character.'),
        createSchemaData('real_name', 'string', 'The real name of the character.'),
        createSchemaData('species', 'array', `The species of the character('Human', 'Supe' or 'Supe(Temp)').`),
        createSchemaData('citizenship', 'string', 'The citizenship of the character.'),
        createSchemaData('gender', 'string', `The gender for the character('Female', 'Male').`),
        createSchemaData('status', 'string', `The status of the character('Alive', 'Dead' or 'Unknown').`),
        createSchemaData('affiliation', 'array of affiliation object', 'The affiliation(s) of the character belongs to.'),
        createSchemaData('families', 'array of familie object', 'The family mermbers of the character.'),
        createSchemaData('portrayed', 'array of string', 'The actor(s) who portrayed the character.'),
        createSchemaData('first_seen', 'episode object', 'The first episode the character appeared.'),
        createSchemaData('last_seen', 'episode object', 'The last episode the character appeared.'),
        createSchemaData('season', 'array of integer', 'The season(s) the character appeared.'),
        createSchemaData('image', 'string', 'The image url of the character.'),
        createSchemaData('url', 'string', 'The url of the character.')
      ];
  }
};

function SchemaTable({ resource }: { resource: string }) {
  return (
    <TableContainer component={Paper} sx={{ height: '100%' }}>
      <Table sx={{ height: '100%' }} aria-label={`${resource} schema table`}>
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characterData(resource).map((row) => (
            <TableRow key={row.key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SchemaTable;
