import React from "react";
import { Button, Navbar } from "flowbite-react";
const DefaultNav = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/" className="hover:text-blue-700">
        <img src="/logo-icon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white uppercase">
          typing test
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color="blue" href="/typing-test">
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DefaultNav;
