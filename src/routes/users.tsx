import Button from "../components/Button/Button";
import UsersList from "../components/UsersList/UsersList";

export default function Users() {
  return (
    <>
      <div style={{ padding: "12px var(--padding-left-right)" }}>
        <UsersList />
      </div>
      <div style={{ textAlign: "center" }}>
        <Button style={{ margin: "52px 0" }} appearance="secondary">
          Load more
        </Button>
      </div>
    </>
  );
}
