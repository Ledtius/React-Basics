export const PracticeJS = () => {
  const clients = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  // ✅ Add a new property "status: 'active'" to each client
  // ✅ Do NOT modify the original

  const duplicateClients = clients.map((client) => ({
    ...clients,
    status: "active",
  }));

  console.log(clients);
  console.log(duplicateClients);
};
