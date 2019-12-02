import React, { useState, useEffect } from 'react'
import { useTransition, animated as a, config } from 'react-spring'
import shuffle from 'lodash/shuffle'
import useMeasure from '../hooks/useMeasure'
import useMedia from '../hooks/useMedia'
import data from '../data/data'
import '../styles.css'
import Header from '../components/header'

function MasonryGrid() {
    const columns = useMedia(
        ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
        [5, 4, 3],
        2
    )
    const [bind, { width }] = useMeasure()
    const [items, set] = useState(data)
    const [reorder, setReorder] = useState(false)

    useEffect(() => set(shuffle), [reorder])

    let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
    let gridItems = items.map((child, i) => {
        const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
        const xy = [
            (width / columns) * column,
            (heights[column] += child.height / 2) - child.height / 2,
        ] // X = container width / number of columns * column index, Y = it's just the height of the current column
        return { ...child, xy, width: width / columns, height: child.height / 2 }
    })

    // This turns gridItems into transitions, any addition, removal or change will be animated
    const transitions = useTransition(gridItems, item => item.css, {
        from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
        enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
        update: ({ xy, width, height }) => ({ xy, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 25,
    })

    return (
        <React.Fragment>
            <Header remix={() => setReorder(!reorder)} />
            <div {...bind} class="list" style={{ height: Math.max(...heights) }}>
                {transitions.map(({ item, props: { xy, ...rest }, key }) => (
                    <a.div
                        key={key}
                        style={{
                            transform: xy.interpolate(
                                (x, y) => `translate3d(${x}px,${y}px,0)`
                            ),
                            ...rest,
                        }}
                    >
                        <div style={{ backgroundImage: item.css }} />
                    </a.div>
                ))}
            </div>
        </React.Fragment>
    )
}
export default MasonryGrid;
