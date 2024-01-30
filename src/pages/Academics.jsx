import React from "react";

import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react";


export default function Academics() {
  return (
    
    <div>
      <h1 style={{ color: 'red', fontSize: '30px' }}>Academic Report</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '20px' }}>
      <thead>
        <tr>
          <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>
            Name
          </th>
          <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Department</th>
          <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Percentage</th>
        </tr>
      </thead>
      <tbody>
        
          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>
              
              <span style={{ padding: '10px', textAlign: 'left' }}>Ajith</span>
            </td>
            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>MCA</td>
            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>80%</td>
            
          </tr>

          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>
              
            <span style={{ padding: '10px', textAlign: 'left' }}>Hirin</span>
            </td>
            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Btec</td>
            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>70%</td>
          </tr>

          <tr>
            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>
              
              <span style={{ padding: '10px', textAlign: 'left' }}>Jithin</span>
            </td>
            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>BSC</td>
            <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>65%</td>
            
          </tr>
        
      </tbody>
    </table>

    </div>
  );
}
