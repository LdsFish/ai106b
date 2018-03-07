var DATA = module.exports = {
    'recurrent.SimpleRNN.0': {
      input: {
        shape: [3, 6],
        data: [
          -0.409861,
          -0.508697,
          -0.23829,
          0.215855,
          -0.570529,
          0.272606,
          -0.304086,
          -0.907375,
          -0.030361,
          0.792806,
          0.0388,
          -0.782223,
          0.098008,
          -0.99904,
          0.356238,
          -0.490761,
          0.905586,
          0.839691
        ]
      },
      weights: [
        {
          shape: [6, 4],
          data: [
            -0.045589,
            0.415186,
            -0.562532,
            0.417194,
            0.595636,
            0.384863,
            -0.421095,
            0.531931,
            0.892653,
            -0.9421,
            -0.522872,
            -0.37874,
            -0.768283,
            -0.196357,
            -0.818039,
            -0.631257,
            -0.405011,
            -0.035917,
            -0.48787,
            0.181399,
            0.150278,
            -0.910744,
            0.68533,
            0.571771
          ]
        },
        {
          shape: [4, 4],
          data: [
            -0.720918,
            -0.952173,
            -0.727704,
            0.156292,
            -0.355836,
            -0.862534,
            0.167887,
            0.9923,
            -0.726801,
            0.346909,
            0.339642,
            0.91009,
            0.52891,
            -0.857623,
            -0.906373,
            0.492599
          ]
        },
        { shape: [4], data: [-0.836587, 0.897901, -0.267459, -0.930645] }
      ],
      expected: { shape: [4], data: [-0.921578, 0.582325, 0.984568, 0.313785] }
    },
    'recurrent.SimpleRNN.1': {
      input: {
        shape: [8, 5],
        data: [
          0.010183,
          -0.266283,
          -0.587731,
          0.343666,
          -0.894301,
          0.745644,
          0.221028,
          -0.386505,
          0.599566,
          0.769919,
          0.609677,
          -0.28979,
          0.967391,
          0.717751,
          -0.140432,
          -0.631171,
          0.947662,
          -0.028251,
          0.421945,
          0.204412,
          -0.366352,
          -0.920305,
          -0.748026,
          -0.124691,
          -0.578315,
          -0.684603,
          -0.336723,
          -0.918999,
          -0.820263,
          -0.186095,
          0.571209,
          0.206034,
          0.477405,
          -0.478543,
          0.401324,
          -0.582631,
          0.920882,
          0.54878,
          -0.473092,
          -0.504899
        ]
      },
      weights: [
        {
          shape: [5, 5],
          data: [
            0.219175,
            0.170157,
            -0.559083,
            0.254571,
            -0.07401,
            -0.665539,
            -0.673129,
            -0.205758,
            -0.480003,
            0.337035,
            0.051406,
            -0.81763,
            -0.428026,
            -0.092167,
            0.685529,
            -0.5668,
            -0.457007,
            0.928876,
            0.658722,
            -0.336033,
            -0.424178,
            -0.833065,
            0.861114,
            0.468557,
            -0.098388
          ]
        },
        {
          shape: [5, 5],
          data: [
            -0.048881,
            0.614161,
            0.195963,
            0.306777,
            0.135452,
            -0.773353,
            0.075287,
            0.283726,
            -0.340782,
            -0.184696,
            0.292298,
            0.660226,
            -0.914862,
            -0.785209,
            0.617659,
            0.937712,
            -0.58992,
            0.752688,
            -0.120278,
            -0.591822,
            0.717781,
            0.903103,
            0.992716,
            -0.891614,
            -0.697178
          ]
        },
        { shape: [5], data: [0.698618, 0.022064, 0.814655, 0.729225, -0.278111] }
      ],
      expected: { shape: [5], data: [0.706439, 0.65058, 0.610492, 0.185008, 0.596629] }
    },
    'recurrent.SimpleRNN.2': {
      input: {
        shape: [7, 6],
        data: [
          -0.687216,
          0.901262,
          -0.801191,
          -0.323217,
          -0.809709,
          0.80387,
          -0.356349,
          0.675151,
          0.355832,
          0.909097,
          0.416688,
          -0.59589,
          -0.005416,
          0.78297,
          0.744056,
          -0.249837,
          0.188897,
          -0.414898,
          -0.917833,
          -0.074002,
          -0.263692,
          -0.502035,
          0.957567,
          0.960735,
          -0.30952,
          0.192052,
          -0.086556,
          -0.013007,
          -0.370762,
          0.274436,
          -0.744553,
          -0.779231,
          0.064843,
          0.771956,
          0.438702,
          0.582149,
          -0.750711,
          0.828857,
          0.742574,
          -0.204235,
          -0.410779,
          -0.4297
        ]
      },
      weights: [
        {
          shape: [6, 4],
          data: [
            0.201127,
            0.727021,
            -0.937503,
            -0.008165,
            -0.433634,
            0.261543,
            0.5643,
            0.254178,
            0.716909,
            -0.796969,
            -0.216724,
            -0.388474,
            0.775137,
            -0.574555,
            0.846263,
            0.402263,
            -0.551731,
            -0.068827,
            0.998469,
            -0.197222,
            -0.178234,
            -0.714859,
            -0.203858,
            -0.318714
          ]
        },
        {
          shape: [4, 4],
          data: [
            -0.61537,
            -0.160725,
            -0.055996,
            0.737985,
            -0.204782,
            0.97122,
            -0.736425,
            -0.935545,
            0.910577,
            -0.988285,
            0.689019,
            -0.336002,
            -0.598416,
            0.842676,
            0.543717,
            0.66669
          ]
        },
        { shape: [4], data: [0.555658, 0.481608, 0.539114, -0.411614] }
      ],
      expected: {
        shape: [7, 4],
        data: [
          -0.458042,
          0.480022,
          0.55094,
          -0.091951,
          0.943342,
          -0.091388,
          0.986228,
          -0.733112,
          0.861592,
          -0.865843,
          0.828059,
          -0.497206,
          -0.174145,
          -0.990565,
          0.989866,
          -0.17937,
          0.948069,
          -0.951829,
          0.951084,
          -0.000203,
          0.908789,
          -0.996825,
          0.995605,
          0.591596,
          0.725882,
          -0.919538,
          0.991781,
          0.865701
        ]
      }
    },
    'recurrent.SimpleRNN.3': {
      input: {
        shape: [7, 6],
        data: [
          0.719399,
          0.281407,
          0.778497,
          0.881326,
          0.143583,
          -0.039836,
          -0.753727,
          -0.868352,
          -0.161102,
          0.474482,
          0.424175,
          -0.308505,
          0.686509,
          0.049983,
          0.650185,
          0.484433,
          0.822685,
          -0.522601,
          0.480813,
          0.102252,
          -0.83675,
          0.66675,
          0.586352,
          -0.71142,
          0.861089,
          -0.674528,
          -0.594313,
          0.465266,
          0.559367,
          -0.546443,
          -0.187902,
          -0.661597,
          0.474318,
          0.32583,
          0.357901,
          -0.232202,
          -0.585644,
          0.103958,
          -0.779314,
          -0.743425,
          -0.864946,
          -0.640665
        ]
      },
      weights: [
        {
          shape: [6, 4],
          data: [
            0.705929,
            -0.455616,
            -0.247481,
            -0.289738,
            -0.172745,
            0.10867,
            -0.245206,
            -0.281163,
            0.153902,
            0.822921,
            0.411496,
            0.06129,
            0.725935,
            -0.914002,
            0.057156,
            -0.839685,
            0.078484,
            0.920066,
            0.853763,
            0.567047,
            0.417124,
            0.267793,
            0.388957,
            -0.996824
          ]
        },
        {
          shape: [4, 4],
          data: [
            -0.219586,
            0.206946,
            -0.331215,
            0.127084,
            0.22716,
            -0.850342,
            -0.866678,
            -0.96958,
            0.788851,
            0.549344,
            -0.182773,
            0.765206,
            -0.856816,
            -0.163875,
            0.80548,
            -0.385654
          ]
        },
        { shape: [4], data: [-0.679828, 0.865029, 0.861333, 0.591202] }
      ],
      expected: { shape: [4], data: [0.670791, 0.295618, 0.839228, -0.451159] }
    },
    'recurrent.SimpleRNN.4': {
      input: {
        shape: [7, 6],
        data: [
          0.112672,
          -0.828695,
          0.336233,
          0.388093,
          -0.295826,
          -0.480416,
          0.225187,
          -0.364328,
          -0.206269,
          0.961105,
          0.039125,
          0.391735,
          -0.24781,
          0.492028,
          0.557904,
          0.264287,
          -0.540591,
          -0.777572,
          0.350376,
          0.03832,
          -0.48235,
          -0.424034,
          0.750492,
          -0.167177,
          -0.479996,
          0.359486,
          0.660316,
          0.152612,
          0.784523,
          0.748462,
          -0.844083,
          0.33961,
          0.123796,
          -0.800752,
          -0.643821,
          0.431799,
          -0.516504,
          -0.732232,
          -0.660103,
          -0.264003,
          0.933494,
          0.275952
        ]
      },
      weights: [
        {
          shape: [6, 4],
          data: [
            -0.390491,
            -0.578366,
            0.174977,
            -0.794259,
            0.275087,
            0.428053,
            -0.915046,
            -0.096302,
            -0.744594,
            0.049007,
            -0.159581,
            0.213776,
            0.238386,
            0.329687,
            0.619891,
            0.36543,
            -0.482228,
            0.841286,
            -0.270654,
            0.132222,
            0.042815,
            0.057958,
            0.870286,
            -0.57147
          ]
        },
        {
          shape: [4, 4],
          data: [
            0.467358,
            -0.740084,
            -0.552357,
            -0.475388,
            -0.053543,
            -0.749294,
            -0.89908,
            -0.196198,
            -0.7233,
            0.67584,
            0.165427,
            -0.011422,
            -0.766433,
            -0.250531,
            0.959118,
            -0.582048
          ]
        },
        { shape: [4], data: [-0.217165, 0.276023, -0.853592, -0.465207] }
      ],
      expected: {
        shape: [7, 4],
        data: [
          -0.222866,
          0.736716,
          -0.331714,
          -0.250841,
          0.49324,
          -0.391338,
          -0.971192,
          -0.304377,
          0.425853,
          0.686683,
          -0.837114,
          -0.211837,
          0.442765,
          -0.660864,
          -0.988027,
          -0.767739,
          0.892751,
          -0.063247,
          -0.982079,
          0.571859,
          0.583632,
          -0.788749,
          0.403633,
          -0.84945,
          0.148118,
          0.352691,
          -0.528363,
          0.328677
        ]
      }
    },
    'recurrent.SimpleRNN.5': {
      input: {
        shape: [7, 6],
        data: [
          0.112672,
          -0.828695,
          0.336233,
          0.388093,
          -0.295826,
          -0.480416,
          0.225187,
          -0.364328,
          -0.206269,
          0.961105,
          0.039125,
          0.391735,
          -0.24781,
          0.492028,
          0.557904,
          0.264287,
          -0.540591,
          -0.777572,
          0.350376,
          0.03832,
          -0.48235,
          -0.424034,
          0.750492,
          -0.167177,
          -0.479996,
          0.359486,
          0.660316,
          0.152612,
          0.784523,
          0.748462,
          -0.844083,
          0.33961,
          0.123796,
          -0.800752,
          -0.643821,
          0.431799,
          -0.516504,
          -0.732232,
          -0.660103,
          -0.264003,
          0.933494,
          0.275952
        ]
      },
      weights: [
        {
          shape: [6, 4],
          data: [
            -0.390491,
            -0.578366,
            0.174977,
            -0.794259,
            0.275087,
            0.428053,
            -0.915046,
            -0.096302,
            -0.744594,
            0.049007,
            -0.159581,
            0.213776,
            0.238386,
            0.329687,
            0.619891,
            0.36543,
            -0.482228,
            0.841286,
            -0.270654,
            0.132222,
            0.042815,
            0.057958,
            0.870286,
            -0.57147
          ]
        },
        {
          shape: [4, 4],
          data: [
            0.467358,
            -0.740084,
            -0.552357,
            -0.475388,
            -0.053543,
            -0.749294,
            -0.89908,
            -0.196198,
            -0.7233,
            0.67584,
            0.165427,
            -0.011422,
            -0.766433,
            -0.250531,
            0.959118,
            -0.582048
          ]
        },
        { shape: [4], data: [-0.217165, 0.276023, -0.853592, -0.465207] }
      ],
      expected: { shape: [4], data: [0.883934, 0.439214, -0.654698, -0.106698] }
    },
    'recurrent.SimpleRNN.6': {
      input: {
        shape: [7, 6],
        data: [
          -0.456878,
          0.673716,
          0.754458,
          0.99948,
          -0.576319,
          -0.213528,
          -0.00711,
          0.125772,
          -0.928776,
          0.838621,
          -0.457717,
          -0.7566,
          0.24007,
          -0.48667,
          -0.422729,
          -0.613233,
          -0.059555,
          0.618784,
          0.729787,
          0.218327,
          0.522534,
          -0.778783,
          0.232627,
          0.370789,
          -0.852386,
          -0.119443,
          0.713664,
          -0.672227,
          0.506668,
          0.47509,
          0.406951,
          -0.599353,
          -0.824306,
          -0.711984,
          -0.781436,
          -0.08695,
          -0.584066,
          0.534988,
          0.994046,
          0.781186,
          -0.41391,
          -0.664649
        ]
      },
      weights: [
        {
          shape: [6, 4],
          data: [
            -0.161197,
            0.910156,
            -0.96216,
            0.204728,
            -0.041548,
            0.558612,
            0.037287,
            -0.169732,
            0.935044,
            0.8204,
            -0.479019,
            0.291815,
            -0.161405,
            -0.395158,
            -0.834952,
            0.685206,
            0.707996,
            0.048291,
            0.280055,
            0.300212,
            0.824877,
            -0.858207,
            -0.453055,
            -0.057151
          ]
        },
        {
          shape: [4, 4],
          data: [
            -0.014444,
            0.56472,
            -0.720144,
            -0.252002,
            0.391629,
            -0.228955,
            -0.013911,
            0.40588,
            -0.317771,
            0.989316,
            0.037567,
            -0.715889,
            0.541733,
            -0.044509,
            0.932983,
            0.318657
          ]
        },
        { shape: [4], data: [-0.775538, -0.82662, 0.808256, 0.069654] }
      ],
      expected: {
        shape: [7, 4],
        data: [
          -0.617819,
          -0.609403,
          0.701484,
          0.601676,
          -0.99344,
          -0.647588,
          0.948856,
          -0.144808,
          -0.845821,
          -0.755636,
          0.921907,
          -0.812145,
          -0.682638,
          0.774937,
          0.298497,
          -0.821957,
          0.582644,
          -0.892139,
          0.904271,
          -0.198371,
          -0.993326,
          0.279982,
          0.568939,
          -0.95815,
          -0.866132,
          -0.021665,
          0.278295,
          0.244629
        ]
      }
    },
    'recurrent.SimpleRNN.7': {
      input: {
        shape: [7, 6],
        data: [
          0.768144,
          -0.420612,
          -0.87321,
          -0.115841,
          0.698756,
          -0.909438,
          0.037401,
          -0.96988,
          -0.708589,
          -0.067676,
          0.01788,
          0.837723,
          -0.043675,
          0.59153,
          -0.895703,
          0.080775,
          0.923127,
          -0.989487,
          0.754247,
          0.719781,
          -0.728688,
          0.297508,
          -0.853478,
          -0.284425,
          0.705101,
          0.530558,
          -0.090936,
          0.332791,
          -0.950894,
          -0.671238,
          -0.281409,
          -0.035306,
          0.859823,
          -0.330751,
          -0.00469,
          0.668596,
          -0.123336,
          -0.886897,
          -0.835349,
          0.887526,
          0.940587,
          -0.187323
        ]
      },
      weights: [
        {
          shape: [6, 4],
          data: [
            -0.967442,
            -0.753649,
            0.635901,
            0.084272,
            -0.464285,
            0.37727,
            0.587541,
            0.603524,
            0.615927,
            0.196817,
            -0.319359,
            0.719587,
            0.173497,
            -0.151731,
            -0.566144,
            -0.290326,
            -0.745915,
            -0.862802,
            -0.961024,
            -0.672173,
            0.646805,
            -0.664107,
            -0.990968,
            0.056156
          ]
        },
        {
          shape: [4, 4],
          data: [
            0.3366,
            0.31007,
            -0.976141,
            0.926255,
            -0.711283,
            -0.530559,
            -0.756235,
            0.439944,
            0.552108,
            -0.871472,
            0.14125,
            -0.962905,
            -0.338603,
            -0.300054,
            -0.417717,
            0.450066
          ]
        },
        { shape: [4], data: [-0.322072, 0.24445, -0.973474, -0.322077] }
      ],
      expected: { shape: [4], data: [-0.898236, 0.423821, 0.101186, -0.917313] }
    },
    'recurrent.SimpleRNN.8': {
      input: {
        shape: [7, 6],
        data: [
          -0.309136,
          -0.808726,
          -0.183623,
          0.850543,
          0.846579,
          0.03542,
          -0.353061,
          0.589475,
          0.535401,
          -0.382354,
          -0.857178,
          0.58846,
          0.205749,
          0.707617,
          -0.196757,
          -0.137257,
          -0.226586,
          0.499762,
          -0.867326,
          -0.060488,
          -0.977545,
          0.243193,
          -0.135328,
          -0.600287,
          0.835609,
          -0.249945,
          -0.889016,
          0.216121,
          -0.531361,
          0.062827,
          0.964214,
          0.294365,
          -0.068727,
          0.761004,
          -0.741365,
          0.204835,
          -0.332877,
          -0.629227,
          -0.604997,
          -0.853626,
          0.431865,
          -0.088533
        ]
      },
      weights: [
        {
          shape: [6, 4],
          data: [
            0.541657,
            -0.064909,
            -0.116436,
            0.256712,
            0.300281,
            0.896851,
            0.047865,
            0.850134,
            -0.129581,
            0.39304,
            0.80892,
            -0.384143,
            0.563076,
            -0.119239,
            -0.744437,
            0.402776,
            -0.780366,
            0.468597,
            -0.804769,
            -0.799921,
            0.435465,
            0.450867,
            0.98813,
            0.159434
          ]
        },
        {
          shape: [4, 4],
          data: [
            0.58305,
            -0.918477,
            0.10927,
            -0.3796,
            -0.375415,
            0.123171,
            -0.463354,
            0.442039,
            0.928033,
            -0.848093,
            -0.899042,
            0.294531,
            0.46675,
            0.785351,
            0.802663,
            -0.89208
          ]
        }
      ],
      expected: {
        shape: [7, 4],
        data: [
          -0.911392,
          -0.899419,
          0.16306,
          -0.823665,
          0.858853,
          -0.226248,
          -0.390021,
          0.97514,
          0.939685,
          -0.533025,
          0.681789,
          -0.496885,
          0.64614,
          -0.989915,
          -0.96542,
          0.257739,
          0.564428,
          0.755325,
          0.977285,
          -0.255707,
          0.897535,
          -0.654864,
          0.595529,
          0.898792,
          0.830126,
          -0.824394,
          -0.687499,
          -0.97937
        ]
      }
    }
  }