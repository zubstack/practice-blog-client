function UserInformation({ user }) {
  console.log("user", user);
  return (
    <section className="bg-gray-300 text-center p-4 rounded-sm">
      <h1 className="p-4 font-bold">User Information</h1>
      <p>
        <strong>Nombre: </strong> name
      </p>

      <p>
        <strong>Username: </strong> username
      </p>
    </section>
  );
}

export default UserInformation;
