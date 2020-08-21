import React, { useContext } from "react"
import { Navbar, Button, Container, Nav, NavDropdown } from "react-bootstrap"

import { GlobalContext } from "../store/context"
import { MdPerson, MdLocalPhone } from "react-icons/md"
import TopMobileMenu from "./navs/topMobile"
import TopDesctopMenu from "./navs/topDesctop"
import { Link } from "gatsby"
const CustomNavbar = () => {
  const { onOpenAuthDialog = () => {}, IS_AUTH } = useContext(GlobalContext)

  return (
    <Navbar collapseOnSelect expand="lg" className="w-100 bg-white shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src="/img/logo.svg" style={{ maxWidth: "150px" }} alt="sheddi" />
        </Navbar.Brand>
        <div className="d-none d-lg-flex ml-auto align-items-center">
          <TopDesctopMenu />
          <div className="vertical-line" />
          <table>
            <tbody>
              <tr>
                <td className="text-center">
                  <img src="/img/a1.png" style={{ height: "18px" }} alt="" />
                </td>
                <td>
                  {" "}
                  <a className="nav-link p-0" href="tel:3751111111">
                    +375(11)-111-11-11
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <img src="/img/mts.png" style={{ height: "14px" }} alt="" />
                </td>
                <td>
                  <a className="nav-link p-0" href="tel:3751111111">
                    +375(11)-111-11-11
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="vertical-line " />
          {!IS_AUTH ? (
            <Button
              className="btn-auth btn-clear"
              data-text="Войти"
              onClick={onOpenAuthDialog}
            >
              <span className="auth-icon text-white">
                <MdPerson size="18" />
              </span>
            </Button>
          ) : (
            <Navbar.Collapse
              className="justify-content-end"
              id="responsive-navbar-nav"
            >
              <Nav className="align-items-center">
                <NavDropdown
                  alignRight
                  title={"Личный кабинет"}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to={"/personal/userinfo"}>
                    Контактная информация
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/personal/currentoffers"}>
                    Предстоящие поездки
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/personal/historyoffers"}>
                    История поездок
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          )}
        </div>
        <div className="d-flex d-lg-none align-items-center">
          {!IS_AUTH ? (
            <button
              className={"btn-clear btn-animate"}
              onClick={onOpenAuthDialog}
            >
              <MdPerson size="28" className="cursor" />
            </button>
          ) : null}

          <div className="vertical-line" />
          <TopMobileMenu />
        </div>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
