import {render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';
import { isJSDocSatisfiesTag } from 'typescript';

isJSDocSatisfiesTag.mock('../app/globals.css', () => ({}));
test('Renders the component', () => {
  render(<TaskList />);
  const linkElement = screen.getByText(/Task List/i);
  expect(linkElement).toBeInTheDocument();
});