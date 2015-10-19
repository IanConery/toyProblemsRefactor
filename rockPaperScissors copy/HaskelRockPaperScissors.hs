let a = [x ++ " " ++ y ++ " " ++ z | z <- throws, y <- throws, x <- throws]
let throws = ["rock", "paper", "scissors"]
main = putStrLn a