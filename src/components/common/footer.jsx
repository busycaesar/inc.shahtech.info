import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 px-12">
      <div className="flex flex-wrap gap-4 my-5">
        <div className="flex-1">
          <h3 className="my-1 text-xl font-bold">Contacts</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/shahtechinc">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:dev@shahtech.info">Email</a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="my-1 text-xl font-bold">Address</h3>
          <p>
            <strong>Headquarters</strong>: Toronto, Ontario, Canada
          </p>
          <p>
            <strong>India Office</strong>: Vadodara, Gujarat, India
          </p>
        </div>
      </div>
      <div className="text-center my-3">
        &copy; 2025 ShahTech Inc. All rights reserved.
      </div>
    </footer>
  );
}
