""" Setup code for the Microgrid showcase notebook

"""
# Pierre Haessig — July 2022

import microgrids as mgs

from ipywidgets import interactive, fixed

import numpy as np
from matplotlib import pyplot as plt
from matplotlib.patches import FancyBboxPatch, Circle, Arrow


def add_component(ax, xy_A, anchor, width, height, label='', color='C0', flow=None):
    # Origin of Rectangle
    if anchor=='N':
        xy_rect = (xy_A[0]-width/2, xy_A[1]-height)
    elif anchor=='NE':
        xy_rect = (xy_A[0]-width, xy_A[1]-height)
    elif anchor=='E':
        xy_rect = (xy_A[0]-width, xy_A[1]-height/2)
    elif anchor=='SE':
        xy_rect = (xy_A[0]-width, xy_A[1])
    elif anchor=='S':
        xy_rect = (xy_A[0]-width/2, xy_A[1])
    elif anchor=='SW': # easiest case
        xy_rect = (xy_A[0], xy_A[1])
    elif anchor=='W':
        xy_rect = (xy_A[0], xy_A[1]-height/2)
    elif anchor=='NW':
        xy_rect = (xy_A[0], xy_A[1]-height)
    
    # C is center of rectangle
    xC = xy_rect[0]+width/2
    yC = xy_rect[1]+height/2
    # M is midpoint of link from origin to A
    xM = xy_A[0]/2
    yM = xy_A[1]/2
    # Rectangle which depicts the component, anchored at A
    rect = FancyBboxPatch(xy_rect, width, height,
                          facecolor=color, alpha=1,
                          lw=1, edgecolor='black',
                          boxstyle='Round, pad=0.1')
    # Link to the orgin
    ax.add_patch(Arrow(0, 0, xC, yC, width=0.5, color='k'))
    #if flow == 'load' or flow == 'both':
    # power flow arrow doesn't look right.
    #    ax.add_patch(Arrow(0, 0, xM+xy_A[0]/4, yM+xy_A[1]/4, color='k'))
    
    ax.add_patch(rect)
    ax.text(xC, yC, label,
        size='large', ha='center', va='center')
# end add_component

def test_add_component():
    """add components with all 8 possible anchors"""
    fig, ax = plt.subplots(1,1)

    ax.set(
        aspect='equal',
        xlim=(-2.5,2.5),
        ylim=(-2,2)
    )
    ax.grid(True)

    add_component(ax, (1,1), anchor='SW', width=1, height=2/3,
                  label='Comp A\n1 MW', color='b')
    add_component(ax, (1,0), anchor='W', width=1, height=2/3,
                  label='Comp B\n1 MW', color='r')
    add_component(ax, (1,-1), anchor='NW', width=1, height=2/3, color='g')

    add_component(ax, (-1,1), anchor='SE', width=1, height=2/3, color='b')
    add_component(ax, (-1,0), anchor='E', width=1, height=2/3, color='r')
    add_component(ax, (-1,-1), anchor='NE', width=1, height=2/3, color='g')

    add_component(ax, (0,1), anchor='S', width=1, height=2/3, color='yellow')
    add_component(ax, (0,-1), anchor='N', width=1, height=2/3, color='pink')

    ax.add_patch(Circle((0,0), radius=0.1, color='k'));
