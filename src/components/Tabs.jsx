export default function Tabs({ children, buttons, ButtonsContainer }) {
  // must Uppercase first when name props for element in react
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
