export default function AuthLayout({ children }) {
  return (
    <>
      <h1>Auth Header</h1>
      {children}
      <h1>Auth Footer</h1>
    </>
  );
}
