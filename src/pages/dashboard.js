import React, { useState } from "react";
import {
  Container,
  Cover,
  Head,
  Vr,
} from "../Styles/dashboard/dashboardStyles";
import { useSelector } from "react-redux";
import { userSelector } from "../slices/userSlice";
import Box from "../Components/dashboard/Box";
import { AnimatePresence } from "framer-motion";

const RuleVariants = {
  visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.2 } },
  hidden: { y: 500, opacity: 0 },
};
const Dashboard = () => {
  const userData = useSelector(userSelector);
  const [selected, setSelected] = useState(null);

  return (
    <Container>
      <Head>Welcome, {userData?.full_name}</Head>
      <Cover>
        {(selected === "join" || !selected) && (
          <Box
            type="join"
            selected={selected}
            setSelected={setSelected}
            expand={selected === "join"}
          />
        )}
        <AnimatePresence>
          {!selected && (
            <Vr
              initial="hidden"
              animate="visible"
              variants={RuleVariants}
              exit={{ y: 1000, transition: { duration: 0.5 } }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {(selected === "create" || !selected) && (
            <Box
              type="create"
              selected={selected}
              setSelected={setSelected}
              expand={selected === "create"}
            />
          )}
        </AnimatePresence>
      </Cover>
    </Container>
  );
};

export default Dashboard;
