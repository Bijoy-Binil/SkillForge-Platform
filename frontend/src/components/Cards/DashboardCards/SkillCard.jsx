import React from 'react'

const SkillCard = () => {
    const projects = [
        {
          id: 1,
          name: "Chakra Vision UI Version",
          icon: (
            <svg width="20px" height="20px" viewBox="0 0 21 21" fill="none">
              <path d="M4.04167 0.5H16.9583C18.9167 0.5 20.5 2.08333 20.5 4.04167V16.4583C20.5 18.4167 18.9167 20 16.9583 20H4.04167C2.08333 20 0.5 18.4167 0.5 16.4583V4.04167C0.5 2.08333 2.08333 0.5 4.04167 0.5Z" fill="#470137"/>
              {/* Add remaining SVG paths */}
            </svg>
          ),
          members: [
            { avatar: "/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png", name: "Ryan Tompson" },
            // ... other members
          ],
          budget: "$14,000",
          progress: 60,
        },
        {
          id: 1,
          name: "Chakra Vision UI Version",
          icon: (
            <svg width="20px" height="20px" viewBox="0 0 21 21" fill="none">
              <path d="M4.04167 0.5H16.9583C18.9167 0.5 20.5 2.08333 20.5 4.04167V16.4583C20.5 18.4167 18.9167 20 16.9583 20H4.04167C2.08333 20 0.5 18.4167 0.5 16.4583V4.04167C0.5 2.08333 2.08333 0.5 4.04167 0.5Z" fill="#470137"/>
              {/* Add remaining SVG paths */}
            </svg>
          ),
          members: [
            { avatar: "/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png", name: "Ryan Tompson" },
            // ... other members
          ],
          budget: "$14,000",
          progress: 60,
        },
        {
          id: 1,
          name: "Chakra Vision UI Version",
          icon: (
            <svg width="20px" height="20px" viewBox="0 0 21 21" fill="none">
              <path d="M4.04167 0.5H16.9583C18.9167 0.5 20.5 2.08333 20.5 4.04167V16.4583C20.5 18.4167 18.9167 20 16.9583 20H4.04167C2.08333 20 0.5 18.4167 0.5 16.4583V4.04167C0.5 2.08333 2.08333 0.5 4.04167 0.5Z" fill="#470137"/>
              {/* Add remaining SVG paths */}
            </svg>
          ),
          members: [
            { avatar: "/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png", name: "Ryan Tompson" },
            // ... other members
          ],
          budget: "$14,000",
          progress: 60,
        },
        {
          id: 1,
          name: "Chakra Vision UI Version",
          icon: (
            <svg width="20px" height="20px" viewBox="0 0 21 21" fill="none">
              <path d="M4.04167 0.5H16.9583C18.9167 0.5 20.5 2.08333 20.5 4.04167V16.4583C20.5 18.4167 18.9167 20 16.9583 20H4.04167C2.08333 20 0.5 18.4167 0.5 16.4583V4.04167C0.5 2.08333 2.08333 0.5 4.04167 0.5Z" fill="#470137"/>
              {/* Add remaining SVG paths */}
            </svg>
          ),
          members: [
            { avatar: "/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png", name: "Ryan Tompson" },
            // ... other members
          ],
          budget: "$14,000",
          progress: 60,
        },
        {
          id: 1,
          name: "Chakra Vision UI Version",
          icon: (
            <svg width="20px" height="20px" viewBox="0 0 21 21" fill="none">
              <path d="M4.04167 0.5H16.9583C18.9167 0.5 20.5 2.08333 20.5 4.04167V16.4583C20.5 18.4167 18.9167 20 16.9583 20H4.04167C2.08333 20 0.5 18.4167 0.5 16.4583V4.04167C0.5 2.08333 2.08333 0.5 4.04167 0.5Z" fill="#470137"/>
              {/* Add remaining SVG paths */}
            </svg>
          ),
          members: [
            { avatar: "/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png", name: "Ryan Tompson" },
            // ... other members
          ],
          budget: "$14,000",
          progress: 60,
        },
        // ... other projects
      ];
  return (
    <div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-sm rounded-xl shadow-lg p-6 h-140 border-0">
  {/* Header */}
  <div className="flex justify-between items-center mb-6">
    <div>
      <h3 className="text-lg font-medium mb-2 text-gray-300">Skill Completion Stats</h3>
      <div className="flex items-center text-green-400">
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        <span className="text-sm ml-1">
          <strong>30 done</strong> this month
        </span>
      </div>
    </div>
    <button className="text-gray-400 hover:text-gray-200">
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </button>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="text-gray-400 text-sm">
          <th className="text-left pb-3">COMPANIES</th>
          <th className="text-left pb-3">MEMBERS</th>
          <th className="text-right pb-3">BUDGET</th>
          <th className="text-right pb-3">COMPLETION</th>
        </tr>
      </thead>
      <tbody>
        {/* Table Rows */}
        {projects.map((project) => (
          <tr key={project.id} className="border-t border-gray-700">
            <td className="py-4">
              <div className="flex items-center gap-2">
                {project.icon}
                <span className="text-gray-300">{project.name}</span>
              </div>
            </td>
            <td className="py-4">
              <div className="flex -space-x-2">
                {project.members.map((member, i) => (
                  <img
                    key={i}
                    src={member.avatar}
                    className="w-8 h-8 rounded-full border-2 border-gray-800"
                    alt={member.name}
                  />
                ))}
              </div>
            </td>
            <td className="text-right py-4 text-gray-300">
              {project.budget}
            </td>
            <td className="text-right py-4">
              <div className="flex items-center justify-end gap-2">
                <span className="text-gray-300">{project.progress}%</span>
                <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  )
}


export default SkillCard