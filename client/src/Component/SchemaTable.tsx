import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const supportedFilters = {
  character: ['name', 'real_name', 'species', 'citizenship', 'gender', 'status', 'season'],
  affiliation: ['name'],
  episode: ['season', 'episode', 'title']
};

const createSchemaData = (key: string, type: string, description: string) => {
  return { key, type, description };
};

const characterData = (resource: string) => {
  switch (resource) {
    case 'character':
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
    case 'affiliation':
      return [
        createSchemaData('id', 'integer', 'The unique identifier for the affiliation.'),
        createSchemaData('name', 'string', 'The name of the affiliation.'),
        createSchemaData('leader', 'object with name and url', 'The leader of the affiliation.'),
        createSchemaData('members', 'array of character object', 'The members of the affiliation.'),
        createSchemaData('former_members', 'array of character object', 'The former members of the affiliation.'),
        createSchemaData('associate', 'array of object with name and url', 'The associated groups of the affiliation.'),
        createSchemaData('url', 'string', 'The url of the affiliation.')
      ];
    default:
      return [
        createSchemaData('id', 'integer', 'The unique identifier for the episode.'),
        createSchemaData('season', 'integer', 'The season of the episode.'),
        createSchemaData('episode', 'integer', 'The number of the episode.'),
        createSchemaData('title', 'string', 'The title of the episode.'),
        createSchemaData('premiere_date', 'string', 'The air date of the episode.'),
        createSchemaData('written_by', 'array of string', 'The writer(s) of the episode.'),
        createSchemaData('directed_by', 'string', 'The director of the episode.'),
        createSchemaData('preceded_by', 'object with name and url', 'The previous episode and its url.'),
        createSchemaData('followed_by', 'object with name and url', 'The next episode and its url.'),
        createSchemaData('image', 'string', 'The image url of the episode.'),
        createSchemaData('url', 'string', 'The url of the episode.')
      ];
  }
};

function SchemaTable({ resource }: { resource: 'character' | 'affiliation' | 'episode' }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label={`${resource} schema table`}>
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
                {supportedFilters[resource].includes(row.key) ? row.key + ' *' : row.key}
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
