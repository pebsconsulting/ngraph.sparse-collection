module.exports = {"recordsPerEdge":3,"links":[3,1,1,4,2,1,7,3,1,8,4,1,9,5,1,10,6,1,13,7,1,14,8,1,17,9,1,18,10,1,19,11,1,20,12,1,21,13,1,22,14,1,23,15,1,24,16,1,25,17,1,26,18,1,27,19,1,1,20,-1,2,20,-1.06,3,20,1,24,20,0.301,1,21,1,4,21,-1,1,22,1,2,23,1,26,23,1,5,24,-1,6,24,-1.06,7,24,1,25,24,0.301,5,25,-1,6,25,-1.06,8,25,1,5,26,-1,6,26,-0.96,9,26,1,25,26,0.313,5,27,-1,6,27,-0.86,10,27,1,25,27,0.326,7,28,-1,21,28,2.364,8,29,-1,21,29,2.386,9,30,-1,21,30,2.408,10,31,-1,21,31,2.429,4,32,1.4,5,32,1,5,33,1,23,33,-1,6,34,1,27,34,1,11,35,-1,12,35,-0.43,13,35,1,22,35,0.109,11,36,1,14,36,-1,11,37,1,24,37,-1,11,38,1,21,38,-1,12,39,1,26,39,1,15,40,-0.43,16,40,1,17,40,1,23,40,0.109,15,41,-0.43,16,41,1,18,41,1,23,41,0.108,15,42,-0.39,16,42,1,19,42,1,23,42,0.108,15,43,-0.37,16,43,1,20,43,1,23,43,0.107,17,44,-1,21,44,2.191,18,45,-1,21,45,2.219,19,46,-1,21,46,2.249,20,47,-1,21,47,2.279,14,48,1.4,16,48,-1,16,49,1,25,49,-1,15,50,1,27,50,1,16,51,1],"description":"%MatrixMarket matrix coordinate real general\n-------------------------------------------------------------------------------\n UF Sparse Matrix Collection, Tim Davis\n http://www.cise.ufl.edu/research/sparse/matrices/LPnetlib/lp_afiro\n name: LPnetlib/lp_afiro\n [Netlib LP problem afiro: minimize c'*x, where Ax=b, lo<=x<=hi]\n id: 597\n date: \n author: M. Saunders\n ed: D. Gay\n fields: title name A b id aux kind date author ed notes\n aux: c lo hi z0\n kind: linear programming problem\n-------------------------------------------------------------------------------\n notes:\n A Netlib LP problem, in lp/data.  For more information                        \n send email to netlib@ornl.gov with the message:                               \n                                                                               \n \t send index from lp                                                          \n \t send readme from lp/data                                                    \n \t send minos from lp/data                                                     \n                                                                               \n The following are relevant excerpts from lp/data/readme (by David M. Gay):    \n                                                                               \n The column and nonzero counts in the PROBLEM SUMMARY TABLE below exclude      \n slack and surplus columns and the right-hand side vector, but include         \n the cost row.  We have omitted other free rows and all but the first          \n right-hand side vector, as noted below.  The byte count is for the            \n MPS compressed file; it includes a newline character at the end of each       \n line.  These files start with a blank initial line intended to prevent        \n mail programs from discarding any of the data.  The BR column indicates       \n whether a problem has bounds or ranges:  B stands for \"has bounds\", R         \n for \"has ranges\".                                                             \n                                                                               \n The optimal value is from MINOS version 5.3 (of Sept. 1988)                   \n running on a VAX with default options.                                        \n                                                                               \n                        PROBLEM SUMMARY TABLE                                  \n                                                                               \n Name       Rows   Cols   Nonzeros    Bytes  BR      Optimal Value             \n AFIRO        28     32       88        794       -4.6475314286E+02            \n                                                                               \n From Michael Saunders, Systems Optimization Laboratory at Stanford University.\n                                                                               \n The following are relevant excerts from lp/data/minos (by Michael Saunders),  \n regarding experience with MINOS 5.0 on the problems he provided:              \n                                                                               \n                                                      (unscaled)   (scaled)    \n File   Name    Rows  Cols  Elems  Optimal Objective  Itns  Time  Itns  Time   \n ---- --------  ----  ----  -----  -----------------  ----  ----  ----  ----   \n   1. AFIRO       28    32     88 -4.6475314E+02         6   0.5     6   0.5   \n                                                                               \n * Objective  is the first row of type N.  It is minimized except as shown.    \n                                                                               \n * Itns       is the number of iterations required to solve the problem        \n              by the primal simplex method, as implemented in the Fortran      \n              code MINOS 5.0 (May 1985), using default values for all          \n              parameters.  (The initial basis is triangular.)                  \n                                                                               \n * Time       is the processor time required on an IBM 3081K.  The MINOS       \n              source code was compiled with the IBM Fortran 77 compiler        \n              VS FORTRAN, using the options NOSDUMP, NOSYM and OPT(3).         \n                                                                               \n-------------------------------------------------------------------------------"};