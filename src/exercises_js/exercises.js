export const PracticeJS = () => {
  const users = [
    {
      name: "Ana",
      preferences: {
        theme: "dark",
        notifications: true,
      },
    },
    {
      name: "Luis",
      preferences: {
        theme: "light",
        notifications: false,
      },
    },
    {
      name: "María",
      preferences: {
        theme: "dark",
        notifications: true,
      },
    },
    {
      name: "Pedro",
      preferences: null, // este caso debe evitar errores
    },
  ];

  // Expected output:
  // { darkTheme: 2, notificationsOn: 2 }

  const userInformation = (arrayUsers) => {
    const info = { darkTheme: 0, notificationsOn: 0 };
    for (const user of arrayUsers) {
      if (user.preferences) {
        const { theme, notifications } = user?.preferences;

        const { darkTheme, notificationsOn } = info;

        // info.notificationsOn = info.notificationsOn + (notifications ?? 0);

        /* Es raro que no pueda simplemente escribir notificationesOn + notifications pero si notificationsOn + true o false, es como si a la hora de hacer una comparacion con un operador logico, notifications se transformara su valor original, bueno, en el caso de que usemos el operador Nullish Coalesing */

        info.notificationsOn = info.notificationsOn + notifications;

        /* Al parecer si se puede, de seguro escribi algo mal en el codigo y le adjudique el error a dicho acontecimiento */

        // info.notificationsOn = notifications
        //   ? info.notificationsOn + notifications
        //   : info.notificationsOn;

        if (theme === "dark") info.darkTheme += 1;

        // info.darkTheme = theme === "dark" ? info.darkTheme++ : info.darkTheme;
      }

      // console.log(user.preferences);
    }
    return info;
  };

  console.log(userInformation(users));
};
