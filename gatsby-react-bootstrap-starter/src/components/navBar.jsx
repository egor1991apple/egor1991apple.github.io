import React, { useContext } from "react"
import {
  Navbar,
  Button,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  DropdownButton,
} from "react-bootstrap"

import { GlobalContext } from "../store/context"
import { MdPerson, MdLocalPhone } from "react-icons/md"
import TopMobileMenu from "./navs/topMobile"
import TopDesctopMenu from "./navs/topDesctop"
import { Link } from "gatsby"
import DropdownMenu from "react-bootstrap/DropdownMenu"
import { MdAccessTime, MdPlace } from "react-icons/md"
import { FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa"

const CustomNavbar = () => {
  const { onOpenAuthDialog = () => {}, IS_AUTH } = useContext(GlobalContext)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="w-100 bg-white shadow-sm py-1"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex p-0">
          <img src="/img/logo.svg" style={{ maxWidth: "200px" }} alt="sheddi" />
        </Navbar.Brand>
        <div className="flex-grow-1">
          <div className="d-flex align-items-center justify-content-end">
            <table>
              <tbody>
                <tr>
                  <td className="text-center">
                    <MdPlace className="mr-1"></MdPlace>
                  </td>
                  <td>
                    <a className="nav-link p-0" href="tel:3751111111">
                      г. Минск ул. Авакяна, 21 офис 9
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <MdAccessTime className="mr-1" />
                  </td>
                  <td>
                    <a className="nav-link p-0" href="tel:3751111111">
                      8:00 - 19:00
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="vertical-line " />
            <table>
              <tbody>
                <tr>
                  <td className="text-right">
                    <img src="/img/a1.png" style={{ height: "18px" }} alt="" />
                  </td>
                  <td>
                    {" "}
                    <a className="nav-link p-0" href="tel:3751111111">
                      +375 (29) 606-29-39
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <img src="/img/mts.png" style={{ height: "14px" }} alt="" />
                    <FaTelegram className="mx-1 text-primary"></FaTelegram>
                    <FaViber className="text-indigo"></FaViber>
                    <FaWhatsapp className="text-success mx-1" />
                  </td>
                  <td>
                    <a className="nav-link p-0" href="tel:3751111111">
                      +375 (29) 350-29-49
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="vertical-line " />
            <table>
              <tbody>
                <tr>
                  <td colSpan="2" className="text-center">
                    <small>для экстренных вызовов</small>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <img src="/img/a1.png" style={{ height: "18px" }} alt="" />

                    <FaViber className="text-indigo mx-1"></FaViber>
                  </td>
                  <td>
                    <a className="nav-link p-0" href="tel:3751111111">
                      +375 (29) 617-43-47
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="vertical-line" />

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
                className="justify-content-end flex-grow-0"
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
                    <NavDropdown.Item as={Link} to={"/personal/currentrental"}>
                      Текущая аренда
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/personal/historyrental"}>
                      История аренды
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            )}
          </div>
          <hr className="my-1" />
          <TopDesctopMenu />
        </div>
        <div className="d-flex d-lg-none align-items-center">
          {!IS_AUTH ? (
            <button
              className={"btn-clear btn-animate"}
              onClick={onOpenAuthDialog}
            >
              <MdPerson size="28" className="cursor" />
            </button>
          ) : (
            <Dropdown>
              <Dropdown.Toggle
                as={MdPerson}
                size="28"
                className={"cursor"}
                variant="success"
                id="dropdown-basic"
              >
                Dropdown Button
              </Dropdown.Toggle>
              <Dropdown.Menu alignRight>
                <Dropdown.Item as={Link} to={"/personal/userinfo"}>
                  Контактная информация
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/personal/currentoffers"}>
                  Предстоящие поездки
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/personal/historyoffers"}>
                  История поездок
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/personal/currentrental"}>
                  Текущая аренда
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/personal/historyrental"}>
                  История аренды
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}

          <div className="vertical-line" />
          <TopMobileMenu />
        </div>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
