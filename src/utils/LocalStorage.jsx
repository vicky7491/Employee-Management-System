const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Complete Project Proposal",
        "taskDescription": "Prepare a detailed project proposal for the new client.",
        "taskDate": "2025-01-10",
        "category": "Work",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Team Meeting",
        "taskDescription": "Discuss project milestones with the team.",
        "taskDate": "2025-01-05",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "Submit Timesheet",
        "taskDescription": "Submit the timesheet for last month.",
        "taskDate": "2025-01-02",
        "category": "Admin",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Client Follow-Up",
        "taskDescription": "Follow up with the client about pending deliverables.",
        "taskDate": "2025-01-04",
        "category": "Client Relations",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Update Website",
        "taskDescription": "Update the website's about page with the latest info.",
        "taskDate": "2025-01-09",
        "category": "IT",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Generate the sales report for Q4.",
        "taskDate": "2025-01-03",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Inventory Check",
        "taskDescription": "Conduct an inventory check for stock validation.",
        "taskDate": "2025-01-07",
        "category": "Logistics",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create a presentation for the new marketing strategy.",
        "taskDate": "2025-01-08",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Attend Workshop",
        "taskDescription": "Participate in the skill development workshop.",
        "taskDate": "2025-01-06",
        "category": "Training",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Submit Expense Report",
        "taskDescription": "File the expense report for last month.",
        "taskDate": "2025-01-04",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Aditi",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Research Competitors",
        "taskDescription": "Gather information on competitor strategies.",
        "taskDate": "2025-01-05",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "System Upgrade",
        "taskDescription": "Assist IT team with system upgrade.",
        "taskDate": "2025-01-02",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];

  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
   return{employees, admin}
  }

  