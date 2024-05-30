
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function InterNav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Nome Baebearia</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Agenda</Dropdown.Item>
          <Dropdown.Item>Relatorios</Dropdown.Item>
          <Dropdown.Item>Prestadores</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sair</Dropdown.Item>
        </Dropdown>
        <div className="ml-2">
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">Admin</span>
        </div>
      </div>
      <div className="hidden md:block">
      Sexta-feira, 5 de abril
        
      </div>
    </Navbar>
  );
}
