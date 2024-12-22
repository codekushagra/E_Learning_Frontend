import React, { useEffect, useState } from 'react';
import "./user.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../main';
import Layout from '../Utils/Layout';
import toast from 'react-hot-toast';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const AdminUsers = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(`${server}/api/users`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setUsers(data.users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateUserRole = async (id) => {
    if (confirm("Are you sure you want to update this user's role?")) {
      try {
        const { data } = await axios.put(`${server}/api/user/${id}`, {}, {
          headers: {
            token: localStorage.getItem("token"),
          }
        });
        toast.success(data.message);
        fetchUsers(); // Refetch users after update
      } catch (error) {
        toast.error(error.response?.data?.message || 'Error updating role');
      }
    }
  };

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'role', label: 'Role', minWidth: 170 },
    { id: 'action', label: 'Update Role', minWidth: 170 }
  ];

  const rows = users.map((user) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  }));

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="users">
        <h1>All Users</h1>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'action' ? (
                              <Button
                                variant="contained"
                                onClick={() => updateUserRole(row.id)}
                              >
                                {row.role === 'admin' ? 'Demote to User' : 'Promote to Admin'}
                              </Button>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </Layout>
  );
};

export default AdminUsers;
