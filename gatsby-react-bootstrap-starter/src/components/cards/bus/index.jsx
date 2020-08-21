import React, { useContext, useState } from "react"
import { GlobalContext } from "../../../store/context"

export default function Bus({
  selected = [],
  disabled = [],
  booking = [],
  callback = null,
}) {
  const { BUS = [] } = useContext(GlobalContext)

  return (
    <table className="bus">
      <tbody>
        {BUS.map((row, index) => (
          <tr key={`${index}_row`}>
            {row.map((td, i) => {
              return td == 0 ? (
                <td key="bus-td--empty" key={`${i}_td`} />
              ) : (
                <td
                  key={`${i}_td`}
                  onClick={() =>
                    !selected.find(select => select == td) &&
                    !disabled.find(disable => disable == td) &&
                    callback &&
                    callback(td)
                  }
                  className={`bus-td 
									${booking.find(item => item == td) ? "bus-td--active" : ""}
									${
                    disabled && disabled.find(disable => disable == td)
                      ? "bus-td--disabled"
                      : ""
                  } 
									${selected && selected.find(select => select == td) ? "bus-td--selected" : ""}`}
                >
                  {td}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
