/** @type {import('mock-config-server').FlatMockServerConfig} */
const flatMockServerConfig = [
  {
    baseUrl: "/api",
  },
  {
    configs: [
      {
        path: "/contacts",
        method: "get",
        routes: [
          {
            data: {
              A: [
                {
                  id: 1,
                  name: "Anya",
                  role: "Admin",
                  phone: "89650069620",
                },
                {
                  id: 2,
                  name: "Artem",
                  role: "Manager",
                  phone: "89663321212",
                },
              ],
              B: [
                {
                  id: 3,
                  name: "Boris",
                  role: "Developer",
                  phone: "89661234567",
                },
              ],
              C: [
                {
                  id: 4,
                  name: "Catherine",
                  role: "Designer",
                  phone: "89662345678",
                },
              ],
              D: [
                {
                  id: 5,
                  name: "Dmitry",
                  role: "Tester",
                  phone: "89663456789",
                },
              ],
              E: [
                {
                  id: 6,
                  name: "Elena",
                  role: "Support",
                  phone: "89664567890",
                },
              ],
              F: [
                {
                  id: 7,
                  name: "Felix",
                  role: "Analyst",
                  phone: "89665678901",
                },
              ],
              G: [
                {
                  id: 8,
                  name: "Gena",
                  role: "Lead",
                  phone: "89666789012",
                },
              ],
              H: [
                {
                  id: 9,
                  name: "Anna",
                  role: "HR",
                  phone: "89667890123",
                },
              ],
              I: [
                {
                  id: 10,
                  name: "Igor",
                  role: "Engineer",
                  phone: "89668901234",
                },
              ],
              J: [
                {
                  id: 11,
                  name: "Julia",
                  role: "Coordinator",
                  phone: "89669012345",
                },
              ],
              K: [
                {
                  id: 12,
                  name: "Konstantin",
                  role: "Sales",
                  phone: "89670123456",
                },
              ],
              L: [
                {
                  id: 13,
                  name: "Larisa",
                  role: "Accountant",
                  phone: "89671234567",
                },
              ],
              M: [
                {
                  id: 14,
                  name: "Mikhail",
                  role: "Marketing",
                  phone: "89672345678",
                },
              ],
              N: [
                {
                  id: 15,
                  name: "Natalia",
                  role: "Operations",
                  phone: "89673456789",
                },
              ],
              O: [
                {
                  id: 16,
                  name: "Oleg",
                  role: "Logistics",
                  phone: "89674567890",
                },
              ],
              P: [
                {
                  id: 17,
                  name: "Pavel",
                  role: "Product",
                  phone: "89675678901",
                },
              ],
              Q: [
                {
                  id: 18,
                  name: "Queen",
                  role: "Executive",
                  phone: "89676789012",
                },
              ],
              R: [
                {
                  id: 19,
                  name: "Roman",
                  role: "Researcher",
                  phone: "89677890123",
                },
              ],
              S: [
                {
                  id: 20,
                  name: "Svetlana",
                  role: "Strategist",
                  phone: "89678901234",
                },
              ],
              T: [
                {
                  id: 21,
                  name: "Tatiana",
                  role: "Director",
                  phone: "89679012345",
                },
              ],
              U: [
                {
                  id: 22,
                  name: "Ulyana",
                  role: "Trainer",
                  phone: "89680123456",
                },
              ],
              V: [
                {
                  id: 23,
                  name: "Viktor",
                  role: "Consultant",
                  phone: "89681234567",
                },
              ],
              W: [
                {
                  id: 24,
                  name: "Vladimir",
                  role: "Writer",
                  phone: "89682345678",
                },
              ],
              X: [
                {
                  id: 25,
                  name: "Xenia",
                  role: "Executive",
                  phone: "89683456789",
                },
              ],
              Y: [
                {
                  id: 26,
                  name: "Yuri",
                  role: "Analyst",
                  phone: "89684567890",
                },
              ],
              Z: [
                {
                  id: 27,
                  name: "Zinaida",
                  role: "Manager",
                  phone: "89685678901",
                },
              ],
            },
          },
        ],
      },
    ],
  },
];

export default flatMockServerConfig;
