# include <iostream>

using namespace std;

//iterative solution first

string result_builder ()
{
 vector<string> throws {"rock", "paper", "scissors"}; 
 vector<string> result;

 for(int i = 0; i < 3; i++){
  for(int j = 0; j < 3; j++){
    for(int k = 0; k < 3; k++){
      result.push_back(vector<string> {throws[i], throws[j], throws[k]})
    }
  }
 }

}

void main ()
{
  string result_builder();

}
